import React from 'react';
import { Link } from 'react-router-dom';
import MapCard from '../MapCard/MapCard';


const EventCard = ({event, user, history, handleAddEvent, handleLeaveEvent, handleDeleteEvent, handleEditEvent}) => {

  return (

    <>
    <h1>{event?.address}</h1>
    <h2>{event?.host?.name}</h2>
    {event.host._id !== user.profile && event.attendees.every(person => person._id !== user.profile) &&
    <button onClick={() => handleAddEvent(event._id)}>Join Event</button>
    }
    {event.host._id !== user.profile && event.attendees.some(person => person._id === user.profile) &&
    <button onClick={() => handleLeaveEvent(event._id)}>Leave Event</button>
    }
{event.host._id === user.profile && event.attendees.every(person => person._id !== user.profile) &&
  <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
  }
   {event.host._id === user.profile && event.attendees.every(person => person._id !== user.profile)&&
     <Link to={{pathname:`/events/${event._id}/edit`, state:{event}}}>
  <button>Edit Event</button>  
   </Link> 
  }
    <MapCard
    event={event}
    />
    </>
  
  );
}
export default EventCard;