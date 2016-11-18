import React, { Component } from 'react';
import './FriendListItem.css';
import Button from '../Button/Button';
import { Link } from 'react-router'

class FriendListItem extends Component {

  handleDeleteUser = () => {
    this.props.callback(this.props.id);
  }

  render() {
    return (
      <Link to={`/track/${this.props.id}`}>
			<div className="friend-wrapper">

			      <img src={this.props.image} alt={this.props.name} />

				    <div className="user-info">
					     <h3>{this.props.name}</h3>
				    </div>
				    <div className="action-panel">
					     <Button callback={this.handleDeleteUser} label={this.props.callbacklabel}/>
				    </div>

			</div>
      </Link>
		);
  }
}

export default FriendListItem;
