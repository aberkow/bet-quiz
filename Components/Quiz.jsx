import React, { Component } from 'react';
import { connect } from 'react-redux';

const actions = require('../js/actions');

class Quiz extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>

      </div>
    );
  };
};

let mapStateToProps = function(state, props){
  return{
    choice: state.choice,
    currentQuestion: state.currentQuestion,
    numberLeft: state.numberLeft,
    isQuizReset: state.isQuizReset
  }
}

let Container = connect(mapStateToProps)(Quiz);

module.exports = Container;
