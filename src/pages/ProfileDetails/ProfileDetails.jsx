import React from 'react'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const ProfileDetails = ({location, user}) => {
  const {profile} = location.state
  console.log(profile)

  return (
    <>
      <h1>{profile.name}'s Profile</h1>
      <h3>{profile.email}</h3>
      <h3>{profile.gender}</h3>
      <h3>{profile.pronouns}</h3>
      {profile._id === user.profile && 
        <Link to={{pathname: `/profile/update`, state: {profile}}}>Update Profile!</Link>
      }
    </>
  )
}

export default ProfileDetails