import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <LinearProgress mode='determinate'
          value={this.props.progress}
          min={0}
          max={this.props.max} />
      </div>
    );
  };
};

module.exports = ProgressBar;
