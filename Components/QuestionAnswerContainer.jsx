import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import AnswerChoices from './AnswerChoices';

const actions = require('../js/actions');

class QuestionAnswerContainer extends Component{
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleNext(){
    var currentStep = this.props.currentStep;
    this.props.dispatch(actions.stepIncrease(currentStep));
  }
  handleBack(){
    var currentStep = this.props.currentStep;
    this.props.dispatch(actions.stepDecrease(currentStep));
  }
  render(){
    return(
      <div>
        <Card>
          <CardHeader
            title={this.props.questionAnswerInfo.category}
            actAsExcpander={false}
            showExpandableButton={false} />

          <CardText>
            <h3>{this.props.questionAnswerInfo.statement}</h3>

            <AnswerChoices
              answerChoices={this.props.questionAnswerInfo.answersArr}
              currentStep={this.props.currentStep} />
          </CardText>
          <CardActions>
            <RaisedButton label="Back" onClick={this.handleBack} />
            <RaisedButton label="Next" primary={true} onClick={this.handleNext} />
          </CardActions>
        </Card>
      </div>
    );
  };
};

var Container = connect()(QuestionAnswerContainer);
module.exports = Container;
