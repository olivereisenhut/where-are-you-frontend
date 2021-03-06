import React, { Component } from 'react';
import { Link } from 'react-router'
import Config from '../../config';
import SearchInput, {createFilter} from 'react-search-input'
import FriendListItem from '../../Components/ListItem/FriendListItem';
import './AddFriendScreen.css';

const KEYS_TO_FILTERS = ['prename', 'name']

class AddFriendScreen extends Component {

	state = {
		searchTerm: '',
		users: []
	}

	setUser = (users) => {
		this.setState({users: users});
	}

	fetchUser = () => {
		const self = this;

		fetch(`${Config.API_URL}/user/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response) {
				return response.json()
		}).then(function(json) {
				self.setUser(json);
		}).catch(function(ex) {
				console.log('parsing failed', ex)
		});
	}
	
	componentDidMount() {
		this.fetchUser();
	}

	searchUpdated = (term) => {
		this.setState({searchTerm: term});
  	}

	// add a friend to the current user
	addFriend = (newFriendId) => {
		fetch(`${Config.API_URL}/friends/${this.props.appState.user.Id}/${newFriendId}`, {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json'
				}
		}).then(function(response) {
				return response.json()
		}).then(function(json) {
				console.log(json);
		}).catch(function(ex) {
				console.log('parsing failed', ex)
		});
	}

	render() {
		// list with friends, filtered by react-search
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
								callback={this.addFriend}
								image={user.image_url}
								callbacklabel={"Add"}/>
						);
					})}

					<Link to="/friends" className="button">Back</Link>
				</div>
			</div>
    	);
  	}
}

export default AddFriendScreen;
