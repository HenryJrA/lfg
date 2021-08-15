import React from 'react';
import { Link } from 'react-router-dom';
import MapCard from '../MapCard/MapCard';
import CreateEventForm from '../CreateEventForm/CreateEventForm'

const EventCard = (props) => {
  return ( 
    <>
    <Link>
    
    <h2>these are the events</h2>
    </Link>
   
    <h3>Add an event<CreateEventForm /></h3>
    <MapCard />
    </>
  
  );
}
export default EventCard;