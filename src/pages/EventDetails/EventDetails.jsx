import React from 'react';
import React, { Component } from 'react';
import * as eventServices from '../../services/e'
import EventCard from '../../components/EventCard/EventCard';
class EventDetails extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <div className='eventList'>
  {props.events.map(event =>
    <EventCard
      key={event._id}
      event={event}
      user={this.props.user}
      handleDeleteEvent={props.handleDeleteEvent}
      handleEditEvent = {props.handleEditEvent}
    />
  )}
</div>
      </>
     );
  }
}
 
export default EventDetails;