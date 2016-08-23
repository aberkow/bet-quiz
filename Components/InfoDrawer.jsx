import React, { Component } from 'react';
import { connect } from 'react-redux';

const actions = require('../js/actions');

import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class InfoDrawer extends Component{
  constructor(props){
    super(props);
    this.closeDrawer = this.closeDrawer.bind(this);
  }
  closeDrawer(isDrawerOpen){
    this.props.dispatch(actions.toggleDrawer(this.props.open));
  }
  render(){
    return(
      <div>
        <Drawer open={this.props.open}
          width={500}>
          <IconButton onClick={this.closeDrawer}>
            <NavigationClose />
          </IconButton>
          <div>
            <h1>Info</h1>
            <p>Hold....</p>
          </div>
        </Drawer>
      </div>
    );
  };
};

var Container = connect()(InfoDrawer);
module.exports = Container;
