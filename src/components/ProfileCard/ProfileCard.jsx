import React from 'react';
import { Link } from 'react-router-dom'

const ProfileCard = ({profile}) => {
  return (
    <>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h2>{profile.name}</h2>
      </Link>
        
    </>
  )
}

export default ProfileCard