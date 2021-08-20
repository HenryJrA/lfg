import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '600px',
  height: '400px'
};


const onLoad = marker => {
  console.log('marker: ', marker)
}

class MapCard extends Component {
  state={
    center: {},
    position: {},
    event: []
  }
  
  render() {
      console.log(this.props)

    return (
      <LoadScript
        googleMapsApiKey = {process.env.REACT_APP_API_KEY_GOOGLE}
      >
        <GoogleMap
          //  event={events}
          id="map"
          mapContainerStyle={containerStyle}
          center={{
           lat: parseFloat(this.props.event?.loc?.lat),
           lng: parseFloat(this.props.event?.loc?.lng)}}
          zoom={15}
          
          
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker 
            onLoad={onLoad}
            position={{
              lat: parseFloat(this.props.event?.loc?.lat),
              lng: parseFloat(this.props.event?.loc?.lng)}}
          />
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapCard