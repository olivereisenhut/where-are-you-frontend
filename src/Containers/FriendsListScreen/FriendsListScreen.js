import React, { Component } from 'react';
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
					"image_url": "https://lh3.googleusercontent.com/-pczIEOT8Ii0/AAAAAAAAAAI/AAAAAAAAASU/HSEY6s_Znjw/s96-c/photo.jpg"
				},
			{
					"id": 2,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "https://lh3.googleusercontent.com/-pczIEOT8Ii0/AAAAAAAAAAI/AAAAAAAAASU/HSEY6s_Znjw/s96-c/photo.jpg"
				}
		]
	}
	
  render() {
		const friends = this.state.friends.map((friend) => {
			return (
				<FriendListItem key={friend.id} 
					id={friend.id} 
					name={friend.name} callback={null} image={friend.image_url}/>
				);
		});
		
		
		return (
			<div className = "FriendsList-Container">        
				<ul>
					<li>
						{ friends }
					</li>
				</ul>
			</div>
    );
  }
}

export default FriendsListScreen;