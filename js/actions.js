const USER_CHOICE = 'USER_CHOICE';
const userChoice = function(choice){
  return {
    type: USER_CHOICE,
    choice: choice
  };
};

const STEP_INCREASE = 'STEP_INCREASE';
const stepIncrease = function(step){
  return {
    type: STEP_INCREASE,
    step: step
  };
};

const STEP_DECREASE = 'STEP_DECREASE';
const stepDecrease = function(step){
  return {
    type: STEP_DECREASE,
    step: step
  }
}

const RESET_QUIZ = 'RESET_QUIZ';
const resetQuiz = function(isQuizReset){
  return{
    type: RESET_QUIZ,
    isQuizReset: isQuizReset
  };
};

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const toggleDrawer = function(isDrawerOpen){
  return {
    type: TOGGLE_DRAWER,
    isDrawerOpen: isDrawerOpen
  }
}
exports.USER_CHOICE = USER_CHOICE;
exports.userChoice = userChoice;

exports.STEP_INCREASE = STEP_INCREASE;
exports.stepIncrease = stepIncrease;

exports.STEP_DECREASE = STEP_DECREASE;
exports.stepDecrease = stepDecrease;

exports.RESET_QUIZ = RESET_QUIZ;
exports.resetQuiz = resetQuiz;

exports.TOGGLE_DRAWER = TOGGLE_DRAWER;
exports.toggleDrawer = toggleDrawer;
