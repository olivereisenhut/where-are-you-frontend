import React, { Component } from 'react';
import { Link } from 'react-router'
import TrackerMap from '../../Components/GoogleMaps/TrackerMap';
import './MapScreen.css';

class MapScreen extends Component {
	
	render() {
		return (
			<div className="map-container">        
				<TrackerMap id={this.props.params.userId} appState={this.props.appState} />
				<div className="container text-center">
					<Link to="/friends" className="button">Back</Link>
				</div>
			</div>
		);
	}
}

export default MapScreen;
