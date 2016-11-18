import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import App from './Containers/App/App';
import LoginScreen from './Containers/LoginScreen/LoginScreen';
import MapScreen from './Containers/MapScreen/MapScreen';
import AddFriendScreen from './Containers/AddFriendScreen/AddFriendScreen';
import FriendsListScreen from './Containers/FriendsListScreen/FriendsListScreen';

import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/friends" />
    <Route path="/" component={App} >
      <Route path="/login" component={LoginScreen} />
			<Route path="/track/:userId" component={MapScreen} />
			<Route path="/friends" component={FriendsListScreen} />
			<Route path="/friends/add" component={AddFriendScreen} />
			</Route>
  </Router>
  ), document.getElementById('root')
);
