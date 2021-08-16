import React, { Component } from 'react'
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

  handleAddEvent = (id) => {
    console.log(id)
  }

  handleLeaveEvent = (id) => {
    console.log(id)
  }

  render() { 
    return (
      <>
      {this.state.events.map(event => 
      <EventCard 
      handleAddEvent={this.handleAddEvent}
      handleLeaveEvent={this.handleLeaveEvent}
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