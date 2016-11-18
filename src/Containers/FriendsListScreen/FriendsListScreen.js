import React, { Component } from 'react';
import { Link } from 'react-router'
import Config from '../../config';
import FriendListItem from '../../Components/ListItem/FriendListItem';
import './FriendsListScreen.css';

class FriendsListScreen extends Component {

	state = {
		friends: []
	}

	setFriends(friends) {
		this.setState({
			friends : friends
		});
	}

	getFriends() {
		const self = this;
		fetch(`${Config.API_URL}/friends/${self.props.appState.user.Id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
			return response.json()
		}).then(function(json) {
			self.setFriends(json);
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		});
	}

	componentDidMount() {
		this.getFriends();
	}

	render() {
		const friends = this.state.friends.map((friend) => {
			return (
				<FriendListItem key={friend.id}
					id={friend.id}
					name={`${friend.prename} ${friend.name}`}
					callbacklabel='Delete'
					callback={this.props.handleDeleteUser}
					image={friend.image_url}/>
			);
		});


		return (
			<div className="friendlist-container">
				<div className="container">
					{ friends }
					<Link to="/friends/add" className="button">Add new friend</Link>
				</div>
			</div>
    	);
  	}
}

export default FriendsListScreen;
