import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header-container">
            <h1>{this.props.title}</h1>
        </div>
    );
  }
}

export default Header;
