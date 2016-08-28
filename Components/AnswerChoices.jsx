import React, { Component } from 'react';
import { connect } from 'react-redux';
//allows you to use objects instead of only arrays. Returns an array with one (or more?) index.
const createFragment = require('react-addons-create-fragment');

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const actions = require('../js/actions');

class AnswerChoices extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var answers = this.props.answerChoices.map(function(answer, index){
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
        <RadioButtonGroup name="quizAnswerChoices" answerChoices={this.props.answerChoices}>
          {answers}
        </RadioButtonGroup>
      </div>
    );
  };
};

var Container = connect()(AnswerChoices);
module.exports = Container;
