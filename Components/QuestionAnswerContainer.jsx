import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
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
    var choiceToAdd = this.props.choice;
    var currentStep = this.props.currentStep;
    if (currentStep <= 9){
      this.props.dispatch(actions.stepIncrease(currentStep));
      this.props.dispatch(actions.addUserChoice(choiceToAdd));
    }
    else {
      console.log('finished', 'from handleNext');
      this.props.dispatch(actions.finishQuiz(this.props.isQuizFinished));
    }
  }
  handleBack(){
    var choiceArray = this.props.choiceArray;
    //choiceArray.length - 2 is correct bc it will be used in splice in the reducer.
    var choiceToRemove = choiceArray.length - 1;
    var currentStep = this.props.currentStep;

    this.props.dispatch(actions.removeUserChoice(choiceToRemove));
    this.props.dispatch(actions.stepDecrease(currentStep));
  }
  render(){
    var currentStep = this.props.currentStep;
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
              currentStep={currentStep} />
          </CardText>
          <CardActions>
            <RaisedButton
              label="Back"
              disabled={currentStep === 0}
              onTouchTap={this.handleBack} />
            <RaisedButton
              label={currentStep === this.props.length - 1 ? 'Finish' : 'Next'}
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
