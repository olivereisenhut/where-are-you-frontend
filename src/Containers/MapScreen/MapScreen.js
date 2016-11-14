import React, { Component } from 'react';
import TrackerMap from '../../Components/GoogleMaps/TrackerMap';
import './MapScreen.css';

class MapScreen extends Component {

  render() {
		return (
			<div style={{height: '400px' }}>        
				<TrackerMap  />
			</div>
    );
  }
}

export default MapScreen;
