import React, { Component } from 'react';
import { connect } from 'react-redux';

const actions = require('../js/actions');

import quiz from '../js/quiz';

import HeaderBar from './HeaderBar';
import QuestionAnswerContainer from './QuestionAnswerContainer';

const quizArray = [
  {
    category: 'seating',
    statement: 'Hold',
    sanctuary: 'Individual seating - each person in a comfortable seat',
    kessler: 'White cushioned folding chairs',
    chapel: 'Cushioned bench chairs',
  },
  {
    category: 'music',
    statement: 'Hold',
    sanctuary: 'Choir and organ',
    kessler: 'Quiet band',
    chapel: 'No music'
  },
  {
    category: 'honors',
    statement: 'Hold',
    sanctuary: 'Pre-assigned to honor active members of our congregation',
    kessler: 'Offered to groups = people will stand at their seats - abridged readings',
    chapel: 'Given to those in attendance by ushers',
  },
  {
    category: 'haftarah',
    statement: 'Hold',
    sanctuary: 'first half',
    kessler: 'Last 10 verses',
    chapel: 'Full'
  },
  {
    category: 'shofar',
    statement: 'Hold',
    sanctuary: 'Al Reiner',
    kessler: 'Noah Yontef Mathog',
    chapel: 'Lance Reiser'
  },
  {
    category: 'length',
    statement: 'Hold',
    sanctuary: '4+ hours',
    kessler: '2+ hours',
    chapel: '3+ hours'
  },
  {
    category: 'liturgy',
    statement: 'Hold',
    sanctuary: 'Full service including silent prayer and choral singing',
    kessler: 'Abridged "highlights" service, few silent moments, no repetition',
    chapel: 'Full service with repetition'
  },
  {
    category: 'experience',
    statement: 'Hold',
    sanctuary: 'Love the crowds - want to see and be seen',
    kessler: 'Want to feel comfortable with my family',
    chapel: 'Crave intimacy so I can focus on prayer'
  },
  {
    category: 'clergy',
    statement: 'Hold',
    sanctuary: 'My High Holidays are not complete if I haven\'t heard Rabbi Rosen and Cantor Ness',
    kessler: 'Rabbi Garber and Rabbi Sowalsky make a nice team and I appreciate the familiarity I feel in their service',
    chapel: 'I\'d like to explore a lay-led service with Jason Kay and Susan Gold'
  },
  {
    category: 'words',
    statement: 'Hold',
    sanctuary: 'Tradition, majesty, formality',
    kessler: 'Family friendly, musical, soulful',
    chapel: 'Intimate, intellectual, participatory'
  }
];

class Quiz extends Component{
  constructor(props){
    super(props);
  }
  test(){
    console.log(quiz);
  }
  render(){
    return(
      <div>
        <HeaderBar open={this.props.isDrawerOpen} />
        <QuestionAnswerContainer quizArray={quizArray} />
      </div>
    );
  };
};


let mapStateToProps = function(state, props){
  return{
    choice: state.choice,
    currentQuestion: state.currentQuestion,
    numberLeft: state.numberLeft,
    isQuizReset: state.isQuizReset,
    isDrawerOpen: state.isDrawerOpen
  }
}

let Container = connect(mapStateToProps)(Quiz);

module.exports = Container;
