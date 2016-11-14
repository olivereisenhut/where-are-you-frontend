import React, { Component } from 'react';
import './FriendListItem.css';
import Button from '../Button/Button';

class FriendListItem extends Component {

  render() {
    return (
			<div className="FriendWrapper">
				<img src={this.props.image} alt={this.props.name} />
				<p>{this.props.id}</p>
				<p>{this.props.name}</p>
				<Button callback={this.props.callback} label="del"/>
			</div>
		);
  }
}

export default FriendListItem;
