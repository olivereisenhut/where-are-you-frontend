import React, { Component } from 'react';
import FriendListItem from '../../Components/ListItem/FriendListItem';
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
		
		const users = this.state.users.map((user) => {
			return (
				<FriendListItem key={user.id} 
					id={user.id} 
					name={user.name} callback={null} image={user.image_url}/>
				);
		});
		
		
		return (
			<div className="AddFriendContainer">
				<div className="container">
					<input className="SearchField" type="search" placeholder="search" />
					 { users }
				</div>
			</div>
    );
  }
}

export default AddFriendScreen;
 