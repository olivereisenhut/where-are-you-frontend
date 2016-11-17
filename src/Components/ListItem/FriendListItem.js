import React, { Component } from 'react';
import './FriendListItem.css';
import Button from '../Button/Button';

class FriendListItem extends Component {

  handleDeleteUser = () => {
    this.props.callback(this.props.id);
  }

  render() {
    return (
			<div className="FriendWrapper">
				<img src={this.props.image} alt={this.props.name} />

				<div className="user-info">
					<h3>{this.props.name}</h3>
				</div>
				<div className="action-panel">
					<Button callback={this.handleDeleteUser} label={this.props.callbacklabel}/>
				</div>
			</div>
		);
  }
}

export default FriendListItem;
