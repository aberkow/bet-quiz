const USER_CHOICE = 'USER_CHOICE';
const userChoice = function(choice){
  return {
    type: USER_CHOICE,
    choice: choice
  };
};

// const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
// const submitChoice = function(){
//   return {
//     type: SUBMIT_CHOICE
//   };
// };

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

// exports.SUBMIT_CHOICE = SUBMIT_CHOICE;
// exports.submitChoice = submitChoice;

exports.RESET_QUIZ = RESET_QUIZ;
exports.resetQuiz = resetQuiz;

exports.TOGGLE_DRAWER = TOGGLE_DRAWER;
exports.toggleDrawer = toggleDrawer;
