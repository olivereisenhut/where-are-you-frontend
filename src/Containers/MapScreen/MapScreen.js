import React, { Component } from 'react';
import GoogleMapComponent from '../../Components/GoogleMaps/GoogleMapComponent';
import './MapScreen.css';

class MapScreen extends Component {


  render() {
		return (
			<div>        
				<h1>Google Maps</h1>
				<GoogleMapComponent />
			</div>
    );
  }
}

export default MapScreen;
