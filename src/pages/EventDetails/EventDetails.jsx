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

    <h1>{location.state.event.name}</h1>
    <MapCard 
    event={location.state.event}
    />
    <h2>{location.state.event.address}</h2>
    <h3>{location.state.event.host.name}</h3>
    <h5>{location.state.event.host.pronouns}</h5>
   
   <CommentForm 
    user={user.profile}
    handleAddComment={handleAddComment}
    event={location.state.event._id}
    
    />
    {location.state.event.comment.map(comment =>
      <div>
        {comment.content}
      </div>
      )}
    </div>

    </>
   );
}
 
export default EventDetails;





// this.props.// class EventDetails extends Component {
 

//    }
//   render() { 
//     return ( 
//       <>
//       <div className='eventList'>
//       {this.props.events.map(event =>
//         <EventCard
//           key={event._id}
//           event={event}
//           user={this.props.user}
//           handleDeleteEvent={this.props.handleDeleteEvent}
//           handleEditEvent = {this.props.handleEditEvent}
//         />
//       )}
//       </div>
//       <CommentForm />
//       </>
//      );
//   }
// }
 
// export default EventDetails;

