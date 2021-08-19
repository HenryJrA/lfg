import React from 'react';
import { Link } from 'react-router-dom';
import MapCard from '../MapCard/MapCard';


const EventCard = ({event, user, history, handleAddEvent, handleLeaveEvent, handleDeleteEvent, handleEditEvent}) => {

  return (

    <>
    <Link
    to={{
      pathname: `/events/${event._id}`,
      state: {event}
    }}
    >
    <h2>{event?.name}</h2>
    </Link>
    
    <h2>{event?.host?.name}</h2>
    <h2>{event?.host?.gender}</h2>
    <h1>{event?.address}</h1>
    {event.host._id !== user && event.attendees.every(person => person._id !== user) &&
    <button onClick={() => handleAddEvent(event._id)}>Join Event</button>
    }
    {event.host._id !== user && event.attendees.some(person => person._id === user) &&
    <button onClick={() => handleLeaveEvent(event._id)}>Leave Event</button>
    }
{event.host._id === user && event.attendees.every(person => person._id !== user) &&
  <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
  }
   {event.host._id === user && event.attendees.every(person => person._id !== user)&&
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