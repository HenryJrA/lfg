import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';




const containerStyle = {
  width: '400px',
  height: '400px'
};

// let center = { lat: "40.7222993" , lng: "-73.99590409999999"
// }

// let position = { lat: "40.7222993" , lng: "-73.99590409999999"}
 

const onLoad = marker => {
  console.log('marker: ', marker)
}

class MapCard extends Component {
  state={
    center: {},
    position: {},
    event: []
  }
  
  // async componentDidMount(){
  //   const events = await eventService.getAllEvents()
  //   console.log({events})
  //   this.setState({ events  })
  // }
  
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
          zoom={10}
          
          
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