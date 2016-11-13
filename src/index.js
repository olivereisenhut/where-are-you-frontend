import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './Containers/App/App';
import LoginScreen from './Containers/LoginScreen/LoginScreen';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={LoginScreen} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
