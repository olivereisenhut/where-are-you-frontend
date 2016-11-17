import React, { Component } from 'react';
import FriendListItem from '../../Components/ListItem/FriendListItem';
import SearchField from '../../Components/Input/SearchField';
import './AddFriendScreen.css';

class AddFriendScreen extends Component {

	state = {
		users: [
			 {
					"id": 1,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://kingofwallpapers.com/lama/lama-006.jpg"
				},
			{
					"id": 2,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://kingofwallpapers.com/lama/lama-006.jpg"
				}
		]
	}
	
 	render() {	
		const users = this.state.users.map((user) => {
			return (
				<FriendListItem key={user.id} 
					id={user.id} 
					name={user.name} callback={null} image={user.image_url} callbacklabel={"add"}/>
				);
		});
		
		
		return (
			<div className="AddFriendContainer">
				<div className="container">
					<SearchField />
				 	{ users }
				</div>
			</div>
    );
  }
}

export default AddFriendScreen;
 