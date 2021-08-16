import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import EventCard from '../../components/EventCard/EventCard'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import StateLocation from '../../components/StateLocaltion/StateLocation'
import * as authService from '../../services/authService'
import ProfileList from '../ProfileList/ProfileList'



class App extends Component {
  state = {
    user: authService.getUser(),
  }

  handleLogout = () => {
    authService.logout()
    this.setState({ user: null })
    this.props.history.push('/')
  }

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} history={this.props.history}/>
        <Route exact path='/'>
          <Landing 
          history={this.props.history}
          user={user} 
          render={({history})=> <StateLocation
          history={this.props.history}
          />}
          />
        </Route>
        <Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
        <Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
        <Route 
          exact path="/users"
          render={()=> 
            authService.getUser() ? <ProfileList /> : <Redirect to='/login'/>
        }/>
        <Route
        exact path='/events'
        render={()=> 
          <EventCard />
        }/>

      </>
    )
  }
};

export default App
