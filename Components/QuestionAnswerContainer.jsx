import React, { Component } from 'react';
import { connect } from 'react-redux';

import Result from './Result';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import AnswerChoices from './AnswerChoices';

const actions = require('../js/actions');

class QuestionAnswerContainer extends Component {

  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleNext(){
    var quizLength = this.props.length;
    var choiceToAdd = this.props.choice;
    var currentStep = this.props.currentStep;
    var finishQuiz = this.props.finished;
    if (currentStep <= quizLength - 2){
      this.props.dispatch(actions.stepIncrease(currentStep));
      this.props.dispatch(actions.addUserChoice(choiceToAdd));
    }
    else if (currentStep === quizLength - 1) {
      this.props.dispatch(actions.stepIncrease(currentStep));
      this.props.dispatch(actions.addUserChoice(choiceToAdd));
      this.props.dispatch(actions.finishQuiz(finishQuiz));
    }
  }
  handleBack(){
    var quizLength = this.props.length;
    var choiceArray = this.props.choiceArray;
    var choiceToRemove = choiceArray.length - 1;
    var currentStep = this.props.currentStep;
    var finishQuizFalse = this.props.finished;

    if (currentStep === quizLength) {
      this.props.dispatch(actions.finishQuiz(finishQuizFalse));
      this.props.dispatch(actions.removeUserChoice(choiceToRemove));
      this.props.dispatch(actions.stepDecrease(currentStep));
    }
    else {
      this.props.dispatch(actions.removeUserChoice(choiceToRemove));
      this.props.dispatch(actions.stepDecrease(currentStep));
    }
  }
  render(){
    var currentStep = this.props.currentStep;
    var quizLength = this.props.length;
    return(
      <div>
        <Card>
          <CardHeader
            title={ currentStep <= quizLength - 1 ? this.props.questionAnswerInfo.category : 'Summary'
            }
            actAsExcpander={false}
            showExpandableButton={false} />

          <CardText>
            <h3>{ currentStep <= quizLength - 1 ? this.props.questionAnswerInfo.statement : <Result results={this.props.results} open={this.props.dialogToggle} /> }</h3>

            <AnswerChoices
              answerChoices={ currentStep <= quizLength - 1 ? this.props.questionAnswerInfo.answersArr : [] }
              currentStep={currentStep} />
          </CardText>
          <CardActions>
            <RaisedButton
              label="Back"
              disabled={currentStep === 0}
              onTouchTap={this.handleBack} />
            <RaisedButton
              label={currentStep === quizLength - 1 || currentStep === quizLength ? 'Finish' : 'Next'}
              disabled={currentStep === quizLength}
              primary={true}
              onTouchTap={this.handleNext} />
          </CardActions>
        </Card>
      </div>
    );
  };
};

var Container = connect()(QuestionAnswerContainer);
module.exports = Container;

// 'Report'
