import StateLocation from '../../components/StateLocaltion/StateLocation'
import styles from './Landing.module.css'

const Landing = ({user, history}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <h2>
        <StateLocation 
        history={history}
        user={user}
           isMarkerShown
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           />
         </h2>
       </main>
     )
   }
    
   export default Landing
      