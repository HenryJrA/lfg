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
          <h2>Event Name:</h2>
          <Link
            to={{
              pathname: `/events/${event._id}`,
              state: { event },
            }}
          >
            <h2>{event?.name}</h2>
          </Link>
        
          <MapCard event={event} />
        </div>

        <div className={styles.container}>
          <h1>
            Event Adress :<br /> {event?.address}
          </h1>
          <h2>
            Host :<br /> {event?.host?.name}
          </h2>

          <h2>
            Pronouns :<br /> {event?.host?.pronouns}
          </h2>
        
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
              <button onClick={() => handleDeleteEvent(event._id)}>
                Delete
              </button>
            )}
             {event.host._id === user &&
            event.attendees.every((person) => person._id !== user) && (
              <Link
                to={{ pathname: `/events/${event._id}/edit`, state: { event } }}
              >
                <button>Edit Event</button>
              </Link>
         
            )}
        </div>
      </div>
    </>
  );
};
export default EventCard;
