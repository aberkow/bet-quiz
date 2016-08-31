import React, { Component } from 'react';
import { connect } from 'react-redux';
//allows you to use objects instead of only arrays. Returns an array with one (or more?) index.
const createFragment = require('react-addons-create-fragment');

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const actions = require('../js/actions');

class AnswerChoices extends Component{
  constructor(props){
    super(props);
    this.userChoice = this.userChoice.bind(this);
  }
  userChoice(evt, value){
    var userChoice = value[0];
    this.props.dispatch(actions.userChoice(userChoice));
    //console.log(value[0], 'from changeTest');
  }

  render(){
    var answerArray = this.props.answerChoices;
    var shuffledAnswerArray = answerArray.sort(function() {
      return 0.5 - Math.random()
    });
    var answers = shuffledAnswerArray.map(function(answer, index){
      var choices = createFragment({
        sanctuary: answer.sanctuary,
        kessler: answer.kessler,
        chapel: answer.chapel
      });
      var propertyName = Object.keys(answer);
      return(
        <RadioButton
          key={index}
          value={propertyName}
          label={choices[0]} />
      );
    });
    return (
      <div>
        <RadioButtonGroup
          name="quizAnswerChoices"
          answerChoices={this.props.answerChoices}
          onChange={this.userChoice}>
          {answers}
        </RadioButtonGroup>
      </div>
    );
  };
};

var Container = connect()(AnswerChoices);
module.exports = Container;
