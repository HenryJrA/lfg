import React from 'react';
import * as eventServices from '../../services/eventService'

import MapCard from '../../components/MapCard/MapCard';
import CommentForm from '../../components/CommentForm/CommentForm';
import styles from './EventDetails.module.css'

const EventDetails = ({user, history, location, handleAddComment}) => {
  console.log(user.profile)
  return ( 
    <>
    <div className={styles.container}>

    <h1>Event Name:<br/> {location.state.event.name}</h1>
    <MapCard 
    event={location.state.event}
    />
    <h2>Event Address: <br/>{location.state.event.address}</h2>
    <h3>Host: <br/>{location.state.event.host.name}</h3>
    <h4>Gender: <br/>{location.state.event.host.gender}</h4>
    <h5>Pronouns: <br/>{location.state.event.host.pronouns}</h5>
   <div>

   <CommentForm 
    user={user.profile}
    handleAddComment={handleAddComment}
    event={location.state.event._id}
    
    />
    {location.state.event.comment.map(comment =>
      <div className={styles.container}>
        <h3>
        Comments: 
        </h3>
        <h4>

          {user.name} says:
          </h4>
           {comment.content}
      </div>
      )}
    </div>
   </div>

    </>
   );
}
 
export default EventDetails;





