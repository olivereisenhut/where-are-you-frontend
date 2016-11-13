import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.callback} className="Button">{this.props.label}</button>
    );
  }
}

export default Button;
