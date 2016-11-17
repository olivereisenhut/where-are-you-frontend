import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {

  render() {
    return (
			<input className="SearchField" type="search" placeholder="Search all users..." />
		);
  }
}

export default SearchField;
