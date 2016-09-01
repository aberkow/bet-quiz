import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const createFragment = require('react-addons-create-fragment');
const actions = require('../js/actions');

class Result extends Component {
  constructor(props){
    super(props);
    this.dialogCloser = this.dialogCloser.bind(this);
    this.quizReset = this.quizReset.bind(this);
  }
  dialogCloser(){
    var isDialogOpen = this.props.open;
    console.log(isDialogOpen, 'from dialogCloser');
    this.props.dispatch(actions.toggleDialog(isDialogOpen));
  }
  quizReset() {
    var isQuizReset = this.props.isQuizReset;
    this.props.dispatch(actions.resetQuiz(isQuizReset));
  }
  render() {
    const actions = [
      <RaisedButton
        label='Try again?'
        primary={true}
        onTouchTap={this.quizReset} />,
      <RaisedButton
        label='No thanks.'
        primary={false}
        onTouchTap={this.dialogCloser} />
      ];

    return (
      <div>
        <Dialog
          title='Results'
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.dialogHandler}>
          <p>Sanctuary: {this.props.results.sanctuary}</p>
          <p>Kessler Hall: {this.props.results.kessler}</p>
          <p>Chapel: {this.props.results.chapel}</p>
        </Dialog>
      </div>
    );
  };
};

var Container = connect()(Result);
module.exports = Container;

// open={this.props.isDialogOpen}

// <h1>These are results!</h1>
// <p>Sanctuary: {this.props.results.sanctuary}</p>
// <p>Kessler Hall: {this.props.results.kessler}</p>
// <p>Chapel: {this.props.results.chapel}</p>


// var incomingResults = this.props.results;
//
// var placeNameArr = Object.keys(incomingResults);
//
// console.log(placeNameArr);

//this doesn't work...
// var place = placeNameArr.map(function(placeName, index){
//   return (
//     <span key={index}>{placeName}</span>
//   );
// });
//
//
// var resultsArr = createFragment({
//   sanctuary: this.props.results.sanctuary,
//   kessler: this.props.results.kessler,
//   chapel: this.props.results.chapel
// });
// var results = resultsArr.map(function(result, index) {
//
//   return (
//
//
//       <p key={index}>{result}</p>
//
//   );
// });
// console.log(results, 'from Result');
