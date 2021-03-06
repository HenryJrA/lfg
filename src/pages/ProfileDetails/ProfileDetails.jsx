import React from 'react'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import styles from './ProfileDetails.module.css'

const ProfileDetails = ({location, user}) => {
  const {profile} = location.state

  return (
    <>
    <div className={styles.container}>

      <h1>{profile.name}'s Profile</h1>
      <h3>Email: {profile.email}</h3>
      <h3>Gender: {profile.gender}</h3>
      <h3>Pronouns: {profile.pronouns}</h3>
      {profile._id === user.profile && 
        <Link to={{pathname: `/profile/update`, state: {profile}}}>Update Profile!</Link>
      }
    </div>
    </>
  )
}

export default ProfileDetails