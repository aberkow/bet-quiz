import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import QuestionChoices from './AnswerChoices';

const actions = require('../js/actions');

class QuestionAnswerContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Card>
          <CardHeader
            title={this.props.questionAnswerInfo.category}
            actAsExcpander={false}
            showExpandableButton={false} />

          <CardText>
            <h3>{this.props.questionAnswerInfo.statement}</h3>

            <QuestionChoices answerChoices={this.props.questionAnswerInfo.answersArr} />
          </CardText>
          <CardActions>
            <RaisedButton label="Back" />
            <RaisedButton label="Next" primary={true} />
          </CardActions>
        </Card>
      </div>
    );
  };
};

var Container = connect()(QuestionAnswerContainer);
module.exports = Container;
