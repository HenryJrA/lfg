import React from 'react';
import { Link } from 'react-router-dom'
import styles from './ProfileCard.module.css'

const ProfileCard = ({profile}) => {
  return (
    <>
    <div className={styles.container}>

      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h2>{profile.name}</h2>
      </Link>
    </div>
        
    </>
  )
}

export default ProfileCard