import React, { Component } from 'react'
import CreateEventForm from '../../components/CreateEventForm/CreateEventForm'
import EventCard from '../../components/EventCard/EventCard'
import * as eventService from '../../services/eventService'

class EventList extends Component {
  state = {
    events: []
  }

  async componentDidMount(){
    const events = await eventService.getAllEvents()
    this.setState({ events })
  }
  

  handleAddEvent = async eventData => {
    const event = await eventService.createEvent(eventData)
    const events = [...this.state.events]
    events.push(event)
    this.setState({events})
    this.props.history.push('/events')
  }

  handleLeaveEvent = (id) => {
    console.log(id)
  }
  handleDeleteEvent = async id => {
    const deleteEvent = await eventService.deleteEvent(id)
    const events = this.state.events.filter(event => event._id !== id)
    this.setState({ events })
    
  }
  handleEditEvent = async id => {
    const editEvent = await eventService.editEvent(id)
    this.setState({ user: editEvent})
  }

  render() { 
    return (
      <>
      <CreateEventForm 
      history={this.props.history}
      handleAddEvent={this.handleAddEvent}
      user={this.props.user}
      />
      {this.state.events.map(event => 
      <EventCard 
      handleAddEvent={this.handleAddEvent}
      handleLeaveEvent={this.handleLeaveEvent}
      handleDeleteEvent={this.handleDeleteEvent}
      handleEditEvent={this.handleEditEvent}
      event={event}
      key={event._id}
      user={this.props.user}
      />
      )}
      </>
    );
  }
}
 
export default EventList;