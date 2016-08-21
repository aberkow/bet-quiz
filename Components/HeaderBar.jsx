import React, { Component } from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

class HeaderBar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>

      </div>
    );
  };
};

var Container = connect()(HeaderBar);
module.exports = Container;
