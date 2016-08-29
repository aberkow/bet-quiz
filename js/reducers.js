const actions = require('./actions');

const initialQuizState = {
  choice: '',
  choiceArray: [],
  currentStep: 0,
  //currentQuestion: quizArray[initialQuizState.currentStep],
  //quizLength: quizArray.length,
  isQuizReset: false,
  isQuizFinished: false,
  isDrawerOpen: false
};

var quizReducer = function(state, action){
  state = state || initialQuizState;
  //can also be a switch case statement
  if (action.type === actions.USER_CHOICE){
    //things happen
    var choice = action.choice;
    var choiceState = Object.assign({}, state, {
      choice: choice
    });
    return choiceState;
  }
  else if (action.type === actions.STEP_INCREASE) {
    var nextStep = action.step + 1;
    var userChoice = initialQuizState.choice || state.choice;
    var stepIncreaseState = Object.assign({}, state, {
      currentStep: nextStep,
      choiceArray: state.choiceArray.concat(userChoice)
    });
    return stepIncreaseState;
  }
  else if (action.type === actions.STEP_DECREASE) {
    if (action.step === 0) {
      console.log('the currentStep is 0');
    }
    else {
      var backStep = action.step - 1;
      var choiceToRemove = state.choiceArray.lastIndexOf
      var stepDecreaseState = Object.assign({}, state, {
        currentStep: backStep
      });
      return stepDecreaseState;
    }
  }
  else if (action.type === actions.RESET_QUIZ) {
    var quizResetState = Object.assign({}, state, {
      isQuizReset: !action.isQuizReset
    });
    return quizResetState;
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
