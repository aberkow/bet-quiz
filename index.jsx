import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './js/store';

import Quiz from './Components/Quiz';

injectTapEventPlugin();

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Provider store={store}>
        <MuiThemeProvider>
          <Quiz />
        </MuiThemeProvider>
      </Provider>
    );
  }
};

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<App />, document.getElementById('app'));
});
