import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

	render() {
    	return (
      		<button onClick={this.props.callback} className="button">{this.props.label}</button>
    	);
  	}
}

export default Button;
