import React, { Component } from 'react';
import { Link } from 'react-router'
import TrackerMap from '../../Components/GoogleMaps/TrackerMap';
import './MapScreen.css';

class MapScreen extends Component {
	
  render() {
		return (
			<div style={{height: '400px' }}>        
				<TrackerMap id={this.props.params.userId} />
				<div className="container text-center">
					<Link to="/friends">Back</Link>
				</div>
			</div>
    );
  }
}

export default MapScreen;
