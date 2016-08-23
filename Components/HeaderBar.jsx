import React, { Component } from 'react';
import { connect } from 'react-redux';
const actions = require('../js/actions');

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import InfoDrawer from './InfoDrawer';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';


class HeaderBar extends Component{
  constructor(props){
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer(isDrawerOpen){
    this.props.dispatch(actions.toggleDrawer(this.props.open));
  }
  render(){
    return(
      <div>
        <AppBar title='Beth El Quiz'
          iconElementLeft={
            <IconButton onClick={this.openDrawer}>
              <InfoOutline />
            </IconButton>
          } />
        <InfoDrawer open={this.props.open} />
      </div>
    );
  };
};

var Container = connect()(HeaderBar);
module.exports = Container;
