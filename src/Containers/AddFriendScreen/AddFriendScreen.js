import React, { Component } from 'react';
import { Link } from 'react-router'

import SearchInput, {createFilter} from 'react-search-input'
import FriendListItem from '../../Components/ListItem/FriendListItem';
import './AddFriendScreen.css';

const KEYS_TO_FILTERS = ['prename', 'name']

class AddFriendScreen extends Component {

	state = {
		searchTerm: '',
		users: [
			 {
					"id": 1,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://66.media.tumblr.com/tumblr_m4e4qrhUre1qg4429o1_1280.jpg"
				},
				{
					"id": 2,
					"prename": "Dario",
					"name": "Gartmann",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://kingofwallpapers.com/lama/lama-006.jpg"
				},
				{
					"id": 3,
					"prename": "Michael",
					"name": "Mattle",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://kingofwallpapers.com/lama/lama-006.jpg"
				},
				{
					"id": 4,
					"prename": "Oliver",
					"name": "Eisenhut",
					"email": "oliver.eisenhut@gmail.com",
					"friends": ["1","2"],
					"image_url": "http://kingofwallpapers.com/lama/lama-006.jpg"
				}
		]
	}

	searchUpdated = (term) => {
		this.setState({searchTerm: term});
  }

	render() {
		const filteredUsers = this.state.users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

		return (
			<div className="AddFriendContainer">
				<div className="container">
					<SearchInput className="search-input" onChange={this.searchUpdated} />
					{filteredUsers.map(user => {
						return (
							<FriendListItem
								key={user.id}
								id={user.id}
								name={`${user.prename} ${user.name}`}
								callback={null}
								image={user.image_url}
								callbacklabel={"add"}/>
						);
					})}

					<Link to="/friends">Back</Link>
				</div>
			</div>
    );
  }
}

export default AddFriendScreen;
