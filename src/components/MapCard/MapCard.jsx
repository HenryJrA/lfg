import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 42.9621248,
  lng: -72.6532096
};

const position = {
  lat: 43.0099506,
  lng: -72.67172359999999
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

class MapCard extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey = {process.env.REACT_APP_API_KEY_GOOGLE}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker 
            onLoad={onLoad}
            position={position}
          />
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapCard