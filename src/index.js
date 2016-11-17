import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './Containers/App/App';
import LoginScreen from './Containers/LoginScreen/LoginScreen';
import MapScreen from './Containers/MapScreen/MapScreen';
import AddFriendScreen from './Containers/AddFriendScreen/AddFriendScreen';
import FriendsListScreen from './Containers/FriendsListScreen/FriendsListScreen';


import './index.css';

/*function requireAuth() {
	let found = hashHistory.find((historyItem) => {
		if (historyItem == '/login') {
			console.log(historyItem);
			return true;
		}
	});
	
	if (!found) {
		console.log('You are not logged in');
	}
}*/

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={LoginScreen} />
			<Route path="/track" component={MapScreen} /*onEnter={requireAuth}*/ />
			<Route path="/friends" component={FriendsListScreen} /*onEnter={requireAuth}*/ />
			<Route path="/friends/add" component={AddFriendScreen} /*onEnter={requireAuth}*/ />
			</Route>
  </Router>
  ), document.getElementById('root')
);
