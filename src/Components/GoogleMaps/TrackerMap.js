import React, { Component } from 'react';
import Config from '../../config';

import canUseDOM from "can-use-dom";
import raf from "raf";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './TrackerMap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
		ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 47.0478519, lng: 9.440610500000048 }}
		center={props.center}
  >
		{props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
	</GoogleMap>
));

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation : 
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

class TrackerMap extends Component {

	state = {
    center: null,
    markers: [],
		targetCoordinates: {}
  };
	
	// get coordinates from target (this.props.id)
	fetchTargetCoordinates = () => {
		const self = this;
				
		fetch(`${Config.API_URL}/coordinate/${this.props.id}`, {
				method: 'GET',
				headers: {
						'Content-Type': 'application/json'
				}
		}).then(function(response) {
				return response.json()
		}).then(function(json) {
				self.updateTargetCoordinates(json);
		}).catch(function(ex) {
				console.log('parsing failed', ex)
		});	
	}

	// update markers and state of target coordinates
	updateTargetCoordinates = (data) => {
		const updatedMarkers = [
      	...this.state.markers,
      	{
        	position: {lat: data['latitude'], lng: data['longitude']},
        	defaultAnimation: 0,
					title: 'My targets location',
					label: 'T',
        	key: data['user_id']
      	}
    	];
					
			this.setState({
				markers: updatedMarkers,
				targetCoordinates: {
					lat: data['latitude'],
					lng: data['longitude']
				}
			});	
	}
	
	// sets center of map to current position and adds marker
	setUserPosition = () => {
		
		console.log(this.props);
		
		this.setState({
			center: {
				lat: this.props.appState.position.latitude,
				lng: this.props.appState.position.longitude,
			},
			content: `Location found using HTML5.`,
		});

		const nextMarkers = [
			...this.state.markers,
			{
				position: {
					lat: this.props.appState.position.latitude, 
					lng: this.props.appState.position.longitude
				},
				defaultAnimation: 0,
				title: "My location",
				label: "Me",
				key: Date.now()
			}
		];
		this.setState({
			markers: nextMarkers,
		});
	}

	// Handle Map and markers
  isUnmounted = false;
	handleMapLoad = this.handleMapLoad.bind(this);
	handleMapLoad(map) {
    this._mapComponent = map;
  }

	componentDidMount() {
		this.fetchTargetCoordinates();
		this.setUserPosition();	
  }


  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
				
    return (
		 	<SimpleMapExampleGoogleMap
				containerElement={
          <div style={{ height: `100%` }} />
        }
				mapElement={
          <div style={{ height: `100%` }} />
        }
				center={this.state.center}
        onMapLoad={this.handleMapLoad}
				markers={this.state.markers}
      />
    );
  }
}

export default TrackerMap;