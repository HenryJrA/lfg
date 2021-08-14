import React, { Component } from 'react'
import { getAllProfiles } from "../../services/profileService"


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
      <h1>Sanity Check</h1>
    );
  }
}
 
export default ProfileList;