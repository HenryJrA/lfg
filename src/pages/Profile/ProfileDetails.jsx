import React from 'react'

const ProfileDetails = ({location, user}) => {
  const {profile} = location.state
  console.log(profile)

  return (
    <>
      <h1>{profile.name}'s Profile</h1>
      <h3>{profile.email}</h3>
      <h3>{profile.gender}</h3>
      <h3>{profile.pronouns}</h3>
    </>
  )
}

export default ProfileDetails