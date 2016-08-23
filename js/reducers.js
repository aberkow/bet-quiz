const actions = require('./actions');
const quiz = require('./quiz');

const initialQuizState = {
  choice: '',
  currentQuestion: 0,
  numberLeft: '',
  isQuizReset: false,
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
