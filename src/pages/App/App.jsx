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


export default App
