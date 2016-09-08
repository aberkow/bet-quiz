const actions = require('./actions');

const initialQuizState = {
  choice: '',
  choiceArray: [],
  counts: {},
  currentStep: 0,
  totalScore: 0,
  finalMessage: '',
  isQuizReset: false,
  isQuizFinished: false,
  isDialogOpen: false,
  isDrawerOpen: false
};

var quizReducer = function(state, action){
  state = state || initialQuizState;
  if (action.type === actions.USER_CHOICE){
    var choice = action.choice;
    var choiceState = Object.assign({}, state, {
      choice: choice
    });
    return choiceState;
  }
  else if (action.type === actions.ADD_USER_CHOICE) {
    var choiceToAdd = action.choiceToAdd;
    var addChoiceState = Object.assign({}, state, {
      choice: '',
      choiceArray: state.choiceArray.concat(choiceToAdd)
    });
    return addChoiceState;
  }
  else if (action.type === actions.REMOVE_USER_CHOICE) {
    var choiceArray = state.choiceArray;
    var choiceToRemove = action.choiceToRemove;
    var choiceRemoved = choiceArray.slice(0, choiceToRemove);

    var removeChoiceState = Object.assign({}, state, {
      choiceArray: choiceRemoved
    });
    return removeChoiceState;
  }
  else if (action.type === actions.STEP_INCREASE) {
    var nextStep = action.step + 1;
    var stepIncreaseState = Object.assign({}, state, {
      currentStep: nextStep
    });
    return stepIncreaseState;
  }
  else if (action.type === actions.STEP_DECREASE) {
    if (action.step === 0) {
      console.log('the currentStep is 0');
    }
    else {
      var backStep = action.step - 1;
      var stepDecreaseState = Object.assign({}, state, {
        currentStep: backStep
      });
      return stepDecreaseState;
    }
  }
  else if (action.type === actions.FINISH_QUIZ) {
    var choiceArray = state.choiceArray;
    var totalScore = state.totalScore;
    var counts = state.counts;

    for (var i = 0; i < choiceArray.length; i++) {
      var place = choiceArray[i];
      counts[place] = (counts[place] || 0) + 1;
    }

    totalScore = (counts.sanctuary * 1) + (counts.kessler * 2) + (counts.chapel * 3);

    var finishQuizState = Object.assign({}, state, {
      counts: counts,
      totalScore: totalScore,
      isQuizFinished: !action.isQuizFinished
    });
    return finishQuizState;
  }
  else if (action.type === actions.DISPLAY_FINAL_MESSAGE) {
    var totalScore = state.totalScore;
    var finalMessage = state.finalMessage;
    // var messageArray = ['sanctuary', 'sanctuary/chapel', 'sanctuary/kessler', 'chapel', 'chapel/sanctuary', 'chapel/kessler', 'kessler', 'kessler/chapel', 'kessler/sanctuary'];

    /*
    something like this...
    10 - just sanctuary
    11 - 15 sanctuary/kessler
    16 - 19 sanctuary/chapel
    20 - just kessler
    21 - 25 kessler/
    26 - 29
    30 - just chapel
    */

    // if (totalScore === 10 || totalScore <= 15) {
    //   finalMessage = messageArray[0];
    // }

    var finalMessageState = Object.assign({}, state, {
      finalMessage: finalMessage
    });
    return finalMessageState;
  }
  else if (action.type === actions.RESET_QUIZ) {
    var quizResetState = Object.assign({}, state, {
      isQuizReset: !action.isQuizReset
    });
    return quizResetState;
  }
  else if (action.type === actions.TOGGLE_DIALOG) {
    var dialogState = Object.assign({}, state, {
      isDialogOpen: !action.isDialogOpen
    });
    return dialogState;
  }
  else if (action.type === actions.TOGGLE_DRAWER) {
    var drawerState = Object.assign({}, state, {
      isDrawerOpen: !action.isDrawerOpen
    });
    return drawerState;
  }
  return state;
}

exports.quizReducer = quizReducer;
