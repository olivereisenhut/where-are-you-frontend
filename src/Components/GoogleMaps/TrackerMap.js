import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import './TrackerMap.css';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 47.0478519, lng: 9.440610500000048 }}
  />
));


class TrackerMap extends Component {


  render() {
    return (
       <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}

export default TrackerMap;