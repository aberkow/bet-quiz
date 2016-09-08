const USER_CHOICE = 'USER_CHOICE';
const userChoice = function(choice){
  return {
    type: USER_CHOICE,
    choice: choice
  };
};

const ADD_USER_CHOICE = 'ADD_USER_CHOICE';
const addUserChoice = function(choiceToAdd){
  return {
    type: ADD_USER_CHOICE,
    choiceToAdd: choiceToAdd
  };
};

const REMOVE_USER_CHOICE = 'REMOVE_USER_CHOICE';
const removeUserChoice = function(choiceToRemove){
  return {
    type: REMOVE_USER_CHOICE,
    choiceToRemove: choiceToRemove
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
  };
};

const FINISH_QUIZ = 'FINISH_QUIZ';
const finishQuiz = function(isQuizFinished){
  return {
    type: FINISH_QUIZ,
    isQuizFinished: isQuizFinished
  };
};

const DISPLAY_FINAL_MESSAGE = 'DISPLAY_FINAL_MESSAGE';
const displayFinalMessage = function(totalScore) {
  return {
    type: DISPLAY_FINAL_MESSAGE,
    totalScore: totalScore
  }
}

const RESET_QUIZ = 'RESET_QUIZ';
const resetQuiz = function(isQuizReset){
  return{
    type: RESET_QUIZ,
    isQuizReset: isQuizReset
  };
};

const TOGGLE_DIALOG = 'TOGGLE_DIALOG';
const toggleDialog = function(isDialogOpen) {
  return {
    type: TOGGLE_DIALOG,
    isDialogOpen: isDialogOpen
  };
};

const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const toggleDrawer = function(isDrawerOpen){
  return {
    type: TOGGLE_DRAWER,
    isDrawerOpen: isDrawerOpen
  };
};
exports.USER_CHOICE = USER_CHOICE;
exports.userChoice = userChoice;

exports.ADD_USER_CHOICE = ADD_USER_CHOICE;
exports.addUserChoice = addUserChoice;

exports.REMOVE_USER_CHOICE = REMOVE_USER_CHOICE;
exports.removeUserChoice = removeUserChoice;

exports.STEP_INCREASE = STEP_INCREASE;
exports.stepIncrease = stepIncrease;

exports.STEP_DECREASE = STEP_DECREASE;
exports.stepDecrease = stepDecrease;

exports.FINISH_QUIZ = FINISH_QUIZ;
exports.finishQuiz = finishQuiz;

exports.DISPLAY_FINAL_MESSAGE = DISPLAY_FINAL_MESSAGE;
exports.displayFinalMessage = displayFinalMessage;

exports.RESET_QUIZ = RESET_QUIZ;
exports.resetQuiz = resetQuiz;

exports.TOGGLE_DIALOG = TOGGLE_DIALOG;
exports.toggleDialog = toggleDialog;

exports.TOGGLE_DRAWER = TOGGLE_DRAWER;
exports.toggleDrawer = toggleDrawer;
