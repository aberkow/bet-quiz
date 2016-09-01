import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const createFragment = require('react-addons-create-fragment');
const actions = require('../js/actions');

class Result extends Component {
  constructor(props){
    super(props);
    this.dialogHandler = this.dialogHandler.bind(this);
  }
  dialogHandler(){
    //need an event handler here, redux action and reducer...
  }
  render() {
    const actions = [
      <RaisedButton
        label='Try again?'
        primary={true}
        onTouchTap={this.dialogHandler} />,
      <RaisedButton
        label='No thanks.'
        primary={true}
        onTouchTap={this.dialogHandler} />
      ];

    return (
      <div>
        <Dialog
          title='Results'
          actions={actions}
          modal={false}
          open={this.props.isDialogOpen}
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
