import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './Containers/App/App';
import LoginScreen from './Containers/LoginScreen/LoginScreen';
import MapScreen from './Containers/MapScreen/MapScreen';
import AddFriendScreen from './Containers/AddFriendScreen/AddFriendScreen';


import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={LoginScreen} />
			<Route path="/track" component={MapScreen} />
			<Route path="/friends" component={FriendsListScreen} >
				<Route path="add" component={AddFriendScreen} />
			</Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
