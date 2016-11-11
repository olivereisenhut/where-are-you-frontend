import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import LoginScreen from './LoginScreen';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/login" component={LoginScreen} />
    <Route path="/" component={App} />
  </Router>
  ), document.getElementById('root')
);
