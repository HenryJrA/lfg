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

    <h1 className={styles.h1}>Event Name: </h1>
      
      <h1 className={styles.h3}>{location.state.event.name}</h1>
    <MapCard 
    event={location.state.event}
    />
    <h1 className={styles.h1}>Event Address:</h1> 
    <h2 className={styles.h3}>{location.state.event.address}</h2>
    <h1 className={styles.h1}>Host: </h1>
    <h2 className={styles.h3}> {location.state.event.host.name}</h2>
    <h1 className={styles.h1}>Gender: </h1>
     <h2 className={styles.h3}> {location.state.event.host.gender}</h2>
      
    <h1 className={styles.h1}>Pronouns: </h1>
      <h2 className={styles.h3}>{location.state.event.host.pronouns}</h2>
        
        
   <div>

   <CommentForm 
    user={user.profile}
    handleAddComment={handleAddComment}
    event={location.state.event._id}
    
    />
    {location.state.event.comment.map(comment =>
      <div className={styles.h1}>
        <h3 className={styles.h1}>
        Comments: 
        </h3>
        <h3 className={styles.h3}>

          {user.name} says:
          </h3>
           {comment.content}
      </div>
      )}
    </div>
   </div>

    </>
   );
}
 
export default EventDetails;





