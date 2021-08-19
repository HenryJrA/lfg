import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import EventCard from '../../components/EventCard/EventCard'
import EventList from '../EventList/EventList'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import StateLocation from '../../components/StateLocaltion/StateLocation'
import * as authService from '../../services/authService'
import ProfileList from '../ProfileList/ProfileList'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate'
import EditEvent from '../EditEvent/EditEvent'
import * as eventService from '../../services/eventService'
import EventDetails from '../EventDetails/EventDetails'




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

 handleAddComment = async (comment, event) =>{
  const updatedAddCommentInEvent = await eventService.addComment(comment, event)
  const events = this.state.events
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
          <EventList 
          history={this.props.history}
          user={user} 
          handleDeleteEvent ={this.handleDeleteEvent}
          handleEditEvent = {this.handleEditEvent}/>
        }/>
        <Route
        exact path='/profile'
        render={({location}) =>
          <ProfileDetails user={user} location={location} />
        }/>

        <Route
        exact path='/profile/update'
        render={({location, history}) =>
            <ProfileUpdate history={history} location={location} />
        }/>
        <Route
        exact path='/events/:id/edit'
        render={({location, history}) =>
        <EditEvent
        handleEditEvent={this.handleEditEvent}
        location={location}
        history ={history}
        />
      }
        />
        <Route
        exact path='/events/:id'
        render={({location, history})=> 
        <EventDetails 
        handleAddComment={this.handleAddComment}
        user={user}
        location={location}
        history ={history}
        />

      }
      />

      </>
    )
  }
};

export default App
