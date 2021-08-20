import React, { Component } from 'react'
import { getAllProfiles } from "../../services/profileService"
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './ProfileList.module.css'

class ProfileList extends Component {
  state = {
    profiles: []
  }

  async componentDidMount() {
    const profiles = await getAllProfiles()
    this.setState({ profiles })
  }

  render() { 
    return (
      <>
      <div className={styles.container}>
        <h1>Profile List</h1>
        {this.state.profiles.map(profile => 
          <ProfileCard
            key={profile._id}
            profile={profile}
          />
      )}
      </div>
    </>
    );
  }
}
 
export default ProfileList;