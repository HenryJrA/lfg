import React, { Component } from 'react'
import MapCard from '../MapCard/MapCard';

class StateLocation extends Component {
  state = { 
    map: [],
    markers: [],
   }
  render = () => { 
    return ( 
      <MapCard
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
     );
  }
}
 
export default StateLocation ;