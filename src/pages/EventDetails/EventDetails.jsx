import React, { Component } from 'react';
import * as eventServices from '../../services/e'
import EventCard from '../../components/EventCard/EventCard';
import CommentForm from '../../components/CommentForm/CommentForm';
class EventDetails extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <div className='eventList'>
      {this.props.events.map(event =>
        <EventCard
          key={event._id}
          event={event}
          user={this.props.user}
          handleDeleteEvent={this.props.handleDeleteEvent}
          handleEditEvent = {this.props.handleEditEvent}
        />
      )}
      </div>
      <CommentForm />
      </>
     );
  }
}
 
export default EventDetails;