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
      <Link to={{pathname: `/profile/${profile._id}/update`, state: {profile}}}>Update Profile!</Link>
    </>
  )
}

export default ProfileDetails