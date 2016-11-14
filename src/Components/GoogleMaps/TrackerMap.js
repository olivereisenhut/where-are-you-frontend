import canUseDOM from "can-use-dom";
import raf from "raf";

import React, { Component } from 'react';


import { withGoogleMap, GoogleMap } from "react-google-maps";
import './TrackerMap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 47.0478519, lng: 9.440610500000048 }}
		center={props.center}
  />
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
    content: null,
    radius: 6000,
  };

  isUnmounted = false;

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
      />
    );
  }
}

export default TrackerMap;