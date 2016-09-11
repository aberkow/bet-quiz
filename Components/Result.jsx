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
    this.finalMessage = this.finalMessage.bind(this);
    this.quizReset = this.quizReset.bind(this);
  }
  dialogCloser(){
    var isDialogOpen = this.props.open;
    console.log(isDialogOpen, 'from dialogCloser');
    this.props.dispatch(actions.toggleDialog(isDialogOpen));
  }
  finalMessage() {
    var totalScore = this.props.totalScore;
    var counts = this.props.counts;
    var finalMessage = this.props.finalMessage;
    var messageArray = ['sanctuary', 'kessler', 'chapel'];

    //set the final message
    if (counts.sanctuary > counts.kessler && counts.sanctuary > counts.chapel) {
      console.log('sanctuary is greater than both');
      finalMessage = messageArray[0];
    }
    else if (counts.kessler > counts.sanctuary && counts.kessler > counts.chapel) {
      console.log('kessler is greater than both');
    }
    else if (counts.chapel > counts.sanctuary && counts.chapel > counts.kessler) {
      console.log('chapel is greater than both');
    }
    else if (counts.sanctuary >= 4 && counts.kessler >= 4) {
      console.log('go to both sanctuary and kessler');
    }
    else if (counts.sanctuary >= 4 && counts.chapel >=4) {
      console.log('go to both sanctuary and chapel');
    }
    else if (counts.kessler >= 4 && counts.chapel >=4) {
      console.log('go to both kessler and chapel');
    }
    else {
      console.log('try all three');
    }

    //if the dialog is opened, display the final message
    if (this.props.open) {
      this.props.dispatch(actions.displayFinalMessage(finalMessage));
    }

  }

  componentWillReceiveProps() {
    this.finalMessage();
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
          onRequestClose={this.dialogHandler} >
          <p>Sanctuary: {this.props.results.sanctuary}</p>
          <p>Kessler Hall: {this.props.results.kessler}</p>
          <p>Chapel: {this.props.results.chapel}</p>
          <p>{this.props.finalMessage}</p>
        </Dialog>
      </div>
    );
  };
};

var Container = connect()(Result);
module.exports = Container;

// finalMessage(){
//   var totalScore = this.props.totalScore;
//   var messageArray = ['sanctuary', 'sanctuary/chapel', 'sanctuary/kessler', 'chapel', 'chapel/sanctuary', 'chapel/kessler', 'kessler', 'kessler/chapel', 'kessler/sanctuary'];
//
//
//   /*
//   something like this...
//   10 - just sanctuary
//   11 - 15 sanctuary/kessler
//   16 - 19 sanctuary/chapel
//   20 - just kessler
//   21 - 25 kessler/
//   26 - 29
//   30 - just chapel
//   */
//
//   if (totalScore >= 10 || totalScore <= 19) {
//     //messageArray[0]
//   }
//   else if (totalScore >= 20 || totalScore <= 29) {
//     //messageArray[3]
//   }
//   else if (totalScore === 30) {
//
//   }
// }




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
