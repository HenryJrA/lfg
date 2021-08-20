import { Link } from 'react-router-dom'
import StateLocation from '../../components/StateLocaltion/StateLocation'
import styles from './Landing.module.css'
import { Button } from 'semantic-ui-react'



const Landing = ({user, history}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <Link to='/events'>
      
      <Button primary >Enter Site</Button>
      </Link>
      <h1>
        About Us
      </h1>
        <a className={styles.container} href='https://www.linkedin.com/in/henry-allam/'>Henry Allam</a>
        <a className={styles.container} href='http://www.linkedin.com/in/michaelssamson'>Michael Samson</a>
        <a className={styles.container} href='https://www.linkedin.com/in/crice802/'>Cory Rice</a>
        
      <h2>
        {/* <StateLocation 
        history={history}
        user={user}
           isMarkerShown
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           /> */}
         </h2>
       </main>
     )
   }
    
   export default Landing
      