import React, { Component } from 'react';
import { Link } from 'react-router'
import FriendListItem from '../../Components/ListItem/FriendListItem';

import './FriendsListScreen.css';

class FriendsListScreen extends Component {

	state = {
		friends: [
			 {
					"id": 1,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg"
				},
			{
					"id": 2,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://i0.kym-cdn.com/photos/images/original/001/176/251/4d7.png"
				}
		]
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
					<Link to="/friends/add">Add new friend</Link>
				</div>
			</div>
    );
  }
}

export default FriendsListScreen;
