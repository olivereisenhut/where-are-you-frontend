import React, { Component } from 'react';
import './FriendListItem.css';
import Button from '../Button/Button';

class FriendListItem extends Component {

  render() {
    return (
			<div className="FriendWrapper">
				<img src={this.props.image} alt={this.props.name} />
				
				<div className="user-info">
					<h3>{this.props.name}</h3>
				</div>
				<div className="action-panel">
					<Button callback={this.props.callback} label={this.props.callbacklabel}/>
				</div>
			</div>
		);
  }
}

export default FriendListItem;
