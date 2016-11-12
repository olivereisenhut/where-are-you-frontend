import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import LoginScreen from './LoginScreen';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={LoginScreen} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
