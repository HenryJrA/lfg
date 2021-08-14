import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import ProfileList from '..ProfileList/ProfileList'

class App extends Component {
	state = {
			user: authService.getUser(),
			userProfile: null
		}
		
		handleLogout = () => {
			authService.logout();
			this.setState({ user: null, userProfile: null });
			this.props.history.push("/");
		};

		handleSignupOrLogin = async () => {
			this.setState({ user: await authService.getUser(), userProfile: await profileAPI.getUserProfile()});
		};

		async componentDidMount() {
			if (!this.state.userProfile){
				const userProfile = await profileAPI.getUserProfile()
				this.setState({ userProfile })
			}
		}

		render() {
			const { user, userProfile } = this.state
			return (
				<>
					<NavBar user={user} handleLogout={this.handleLogout} />
					<Route exact path='/'>
						<Landing user={user} />
					</Route>
					<Route exact path='/signup'>
						<Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
					</Route>
					<Route exact path='/login'>
						<Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
					</Route>
					<Route exact path="/users" render={() =>
						authService.getUser() ?
						<ProfileList 
							userProfile={userProfile}
					/> : <Redirect to="/login" />
	}/>

				</>
			)
		}
	}


import React, { useState, useEffect } from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};


const googleMapsApiKey = process.env.REACT_APP_API_KEY_GOOGLE_MAPS
const tomtomApiKey = process.env.REACT_APP_API_KEY_TOMTOM

const Map = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey,
        libraries,
    });
    // const [markers, setMarkers] = useState([]);
    const [dogParks, setDogParks] = useState([])
    const [selected, setSelected] = useState(null)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [center, setCenter] = useState()
    
    useEffect(() => {
        (async() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(parseFloat(position.coords.latitude))
                    setLng(parseFloat(position.coords.longitude))
                },
                () => null
                )
    })()
    }, [])

    useEffect(() => {
        const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${lat}&lon=${lng}&radius=5000&key=${tomtomApiKey}`
        const makeApiCall = async () => {
            const res = await fetch(tomtom)
            const {results} = await res.json();
            setDogParks(results)
        };
        makeApiCall();
    }, [lat, lng]);

    useEffect(() => {
        props.location &&

        (async () => {
            // setLat(props.location.lat)
            // setLng(props.location.lng)
            // console.log('LATANDLONG!!!', lat, lng)
            const tomtom = `https://api.tomtom.com/search/2/poiSearch/%22dog%20parks%22.json?limit=100&lat=${props.location.lat}&lon=${props.location.lon}&radius=5000&key=${tomtomApiKey}`
            const res = await fetch(tomtom)
            const {results} = await res.json();
            setDogParks(results)
        })();
        
    
    }, [props.location]);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    // const panTo = React.useCallback(({ lat, lng }) => {
    //     mapRef.current.panTo({ lat, lng });
    //     mapRef.current.setZoom(14);
    // }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (
        <>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                initialCenter={{lat: lat, lng: lng}}
                center={{lat: lat, lng: lng}}
                options={options}
                onLoad={onMapLoad}
                // panTo={panTo}
            >

                {dogParks?.map((park) => (
                    <Marker
                        key={park.id}
                        position={{ lat: park.position.lat, lng: park.position.lon }}
                        onClick={() => {
                            setSelected(park);
                        }}
                        icon={{
                            url: `/dog-treat.png`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    />
                ))}
            </GoogleMap>
        </>
    )
}


export default Map;