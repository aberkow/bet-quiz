import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const actions = require('../js/actions');

class QuestionAnswerContainer extends Component{
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
  handleNext(){
    const currentStep = this.props.currentStep;
    this.props.dispatch(actions.stepIncrease(currentStep));
  }
  handlePrev(){
    const currentStep = this.props.currentStep;
    this.props.dispatch(actions.stepDecrease(currentStep));
  }
  renderStepActions(step){
    const currentStep = this.props.currentStep;
    return(
      <div>
        <RaisedButton
          label={currentStep === this.props.length ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableRippleFocus={true}
          primary={true}
          onTouchTap={this.handleNext} />
          <FlatButton
            label='Back'
            disabled={currentStep === 0}
            disableTouchRipple={true}
            disableRippleFocus={true}
            onTouchTap={this.handlePrev} />
      </div>
    );
  }

  render(){
    const finished = this.props.finished
    const currentStep = this.props.currentStep
    return (
      <div>
        <Stepper activeStep={currentStep} orientation={'vertical'}>
          <Step>
            <StepLabel>{this.props.questionAnswerInfo.statement}</StepLabel>
            <StepContent>
              <p>{this.props.questionAnswerInfo.sanctuary}</p>
              <p>{this.props.questionAnswerInfo.kessler}</p>
              <p>{this.props.questionAnswerInfo.chapel}</p>
              {this.renderStepActions(currentStep)}
            </StepContent>
          </Step>
        </Stepper>

      </div>
    );
  };
};

var Container = connect()(QuestionAnswerContainer);
module.exports = Container;

// <div>
//   <h1>{this.props.questionAnswerInfo.category}</h1>
//   <h2>Question: {this.props.questionAnswerInfo.statement}</h2>
//   <h3>Answers</h3>
//   <p>{this.props.questionAnswerInfo.sanctuary}</p>
//   <p>{this.props.questionAnswerInfo.kessler}</p>
//   <p>{this.props.questionAnswerInfo.chapel}</p>
// </div>
