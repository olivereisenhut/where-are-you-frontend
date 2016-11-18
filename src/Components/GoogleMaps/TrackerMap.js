import React, { Component } from 'react';
import Config from '../../config';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './TrackerMap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
		ref={props.onMapLoad}
    defaultZoom={3}
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

class TrackerMap extends Component {

	 constructor(props) {
      super(props);
	
      //send all five seconds the location to the api
      window.setInterval(this.fetchTargetCoordinates, 5000);
    }
	
	state = {
    center: null,
    markers: [{
			label: 'Target',
			key: 'Target',
			position: {
				lat: 0,
				lng: 0
			}
		}],
		targetCoordinates: {}
  };
	
	// get coordinates from target (this.props.id)
	fetchTargetCoordinates = () => {
		const self = this;
				
		fetch(`${Config.API_URL}/coordinate/${self.props.id}`, {
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
		var longitude = data['longitude'];
		var latitude = data['latitude'];
		
		if(this.targetMoved(latitude, longitude)) {
			const updatedMarkers = this.state.markers;

			// update marker 
			for (var i = 0; i < updatedMarkers.length; i++) {
				if (updatedMarkers[i].label === 'Target') {
					updatedMarkers[i].position.lat = data['latitude'];
					updatedMarkers[i].position.lng = data['longitude'];
					updatedMarkers[i].defaultAnimation = 0;
					updatedMarkers[i].title = "My targets location";
					
					// important: key needs to be new. Otherwise the GoogleMap component won't be updated
					updatedMarkers[i].key = Date.now() + Math.random();
				}
    	}
			
			this.setState({
				markers: updatedMarkers,
				targetCoordinates: {
					lat: data['latitude'],
					lng: data['longitude']
				}
			});	
		}
	}
	
	// compare coordinates to see if target user moved
	targetMoved = (newLatitude, newLongitude) => {
		if(this.state.targetCoordinates.lat === newLatitude && 
			 this.state.targetCoordinates.lng === newLongitude) {
			return false;
		}
		return true;
	}
	
	// sets center of map to current position and adds marker
	setUserPosition = () => {		
		this.setState({
			center: {
				lat: this.props.appState.position.latitude,
				lng: this.props.appState.position.longitude,
			}
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