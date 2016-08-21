import React, { Component } from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

class Answers extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>

      </div>
    );
  };
};

var Container = connect()(Answers);
module.exports = Container;
