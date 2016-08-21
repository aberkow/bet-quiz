//use axios for async http requests
//const axios = require('axios');

const USER_CHOICE = 'USER_CHOICE';
const userChoice = function(choice){
  return {
    type: USER_CHOICE,
    choice: choice
  };
};

const RESET_QUIZ = 'RESET_QUIZ';
const resetQuiz = function(isQuizReset){
  return{
    type: RESET_QUIZ,
    isQuizReset: isQuizReset
  };
};


exports.USER_CHOICE = USER_CHOICE;
exports.userChoice = userChoice;

exports.RESET_QUIZ = RESET_QUIZ;
exports.resetQuiz = resetQuiz;
