import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	
	handleClick = (event) => {
		this.props.callback(event);
	}
	
  render() {
    return (
      <button onClick={this.handleClick} className="Button">{this.props.label}</button>
    );
  }
}

export default Button;
