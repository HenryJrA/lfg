import React from "react";
import { Link } from "react-router-dom";
import MapCard from "../MapCard/MapCard";
import styles from "./EventCard.module.css";

const EventCard = ({
  event,
  user,
  history,
  handleAddEvent,
  handleLeaveEvent,
  handleDeleteEvent,
  handleEditEvent,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Event Name:</h1>
          <Link
            to={{
              pathname: `/events/${event._id}`,
              state: { event },
            }}
          >
            <h1>{event?.name}</h1>
          </Link>
        
          <MapCard event={event} />
        </div>

        <div className={styles.container}>
          <h1 className={styles.h1}>
            Event Address :<br /> 
            
          </h1>
            <h3 className={styles.h3}>{event?.address}</h3>
          <h1 className={styles.h1}>
            Host :
          </h1>
            <h3 className={styles.h3} >{event?.host?.name}</h3>
          <h1 className={styles.h1}>
            Pronouns : 
          </h1>
            <h3 className={styles.h3}>{event?.host?.pronouns}</h3>
        {event.host._id !== user &&
          event.attendees.every((person) => person._id !== user) && (
            <button onClick={() => handleAddEvent(event._id)}>
              Join Event
            </button>
          )}
        {event.host._id !== user &&
          event.attendees.some((person) => person._id === user) && (
            <button onClick={() => handleLeaveEvent(event._id)}>
              Leave Event
            </button>
          )}
       
          {event.host._id === user &&
            event.attendees.every((person) => person._id !== user) && (
              <button 
              className={styles.warning}
              onClick={() => handleDeleteEvent(event._id)}>
                Delete
              </button>
            )}
             {event.host._id === user &&
            event.attendees.every((person) => person._id !== user) && (
              <Link
                to={{ pathname: `/events/${event._id}/edit`, state: { event } }}
              >
                <button className={styles.edit}>Edit Event</button>
              </Link>
         
            )}
        </div>
      </div>
    </>
  );
};
export default EventCard;
