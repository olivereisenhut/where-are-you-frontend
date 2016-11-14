import React, { Component } from 'react';

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
    markers: [{
      position: {
        lat: 47.1218764,
        lng: 9.486947999999984,
      },
      key: `Sevelen`,
      defaultAnimation: 2
    }]
  };

  isUnmounted = false;

	handleMapLoad = this.handleMapLoad.bind(this);

	handleMapLoad(map) {
    this._mapComponent = map;
  }



 componentDidMount() {
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Location found using HTML5.`,
      });

      raf(tick);
    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: 60,
          lng: 105,
        },
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
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