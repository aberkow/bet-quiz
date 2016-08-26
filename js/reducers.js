const actions = require('./actions');

const initialQuizState = {
  choice: '',
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
    var stepIncreaseState = Object.assign({}, state, {
      currentStep: nextStep
    });
    return stepIncreaseState;
  }
  else if (action.type === actions.STEP_DECREASE) {
    if (currentStep > 0){
      var prevStep = action.step - 1;
      var stepDecreaseState = Object.assign({}, state, {
        currentStep: prevStep
      });
    }
    else {
      console.log('currentStep is 0');
    };
    return stepDecreaseState;
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
