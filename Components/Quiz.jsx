import React, { Component } from 'react';
import { connect } from 'react-redux';

const actions = require('../js/actions');

import quiz from '../js/quiz';

import HeaderBar from './HeaderBar';
import ProgressBar from './ProgressBar';
import QuestionAnswerContainer from './QuestionAnswerContainer';

const quizArray = [
  {
    category: 'Seating',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Individual seating - each person in a comfortable seat'},
      {kessler: 'White cushioned folding chairs'},
      {chapel: 'Cushioned bench chairs'}
    ]
  },
  {
    category: 'Musical Accompaniment',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Choir and organ'},
      {kessler: 'Quiet band'},
      {chapel: 'Congregants singing - no instruments'}
    ]
  },
  {
    category: 'Torah Honors',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Pre-assigned to honor active members of our congregation'},
      {kessler: 'Offered to groups - people will stand at their seats - abridged readings'},
      {chapel: 'Distributed to those in attendance by ushers'}
    ]
  },
  {
    category: 'Haftarah Length',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'first half'},
      {kessler: 'Last 10 verses'},
      {chapel: 'Full'}
    ]
  },
  {
    category: 'Shofar Service',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Al Reiner'},
      {kessler: 'Noah Yontef Mathog'},
      {chapel: 'Lance Reiser'}
    ]
  },
  {
    category: 'Length of Rosh Hashannah Service',
    statement: 'Hold',
    answersArr: [
      {sanctuary: '4+ hours'},
      {kessler: '2+ hours'},
      {chapel: '3+ hours'}
    ]
  },
  {
    category: 'Liturgical Choices',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Full service including silent prayer'},
      {kessler: 'Abridged "highlights" service, few silent moments, no repetition'},
      {chapel: 'Full service, full repetition of the Amidah'}
    ]
  },
  {
    category: 'Experience',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'I want to engage in the broad spectrum of our community'},
      {kessler: 'I want to feel comfortable with my family'},
      {chapel: 'I crave intimacy so I can focus on prayer'}
    ]
  },
  {
    category: 'clergy',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'My High Holidays are not complete if I haven\'t heard Rabbi Rosen and Cantor Ness'},
      {kessler: 'Rabbi Garber and Rabbi Sowalsky make a nice team and I appreciate the familiarity I feel in their service'},
      {chapel: 'I\'d like to explore a lay-led service with Jason Kay and Susan Gold'}
    ]
  },
  {
    category: 'The words that most resonate for me when it comes to the High Holidays are',
    statement: 'Hold',
    answersArr: [
      {sanctuary: 'Tradition, majesty, formality'},
      {kessler: 'Family friendly, musical, soulful'},
      {chapel: 'Intimate, intellectual, participatory'}
    ]
  }
];

class Quiz extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <HeaderBar open={this.props.isDrawerOpen} />
        <QuestionAnswerContainer
          length={quizArray.length}
          questionAnswerInfo={quizArray[this.props.currentStep]}
          choice={this.props.choice}
          choiceArray={this.props.choiceArray}
          currentStep={this.props.currentStep}
          finished={this.props.isQuizFinished}
          dialogToggle={this.props.isDialogOpen}
          results={this.props.counts} />
        <ProgressBar
          progress={this.props.currentStep}
          max={quizArray.length} />
      </div>
    );
  };
};


let mapStateToProps = function(state, props){
  return {
    choice: state.choice,
    choiceArray: state.choiceArray,
    counts: state.counts,
    currentStep: state.currentStep,
    isQuizReset: state.isQuizReset,
    isQuizFinished: state.isQuizFinished,
    isDialogOpen: state.isDialogOpen,
    isDrawerOpen: state.isDrawerOpen
  };
};

let Container = connect(mapStateToProps)(Quiz);

module.exports = Container;
