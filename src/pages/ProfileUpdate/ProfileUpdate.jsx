import React, { Component } from 'react'
import styles from './ProfileUpdate.module.css'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'


class ProfileUpdate extends Component {
  state= {
    formData: this.props.location.state.profile,
  }

  formRef = React.createRef()

  handleSubmit = async e => {
    e.preventDefault()
    const newProfile =  await profileService.updateProfile(this.state.formData)
    this.props.history.push('/users')
  }

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({formData});
	};

  render(){
    return(
      <>
        <form
          className={styles.container}
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <div className={styles.inputContainer}>
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={this.state.formData.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={this.state.formData.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="gender">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              value={this.state.formData.gender}
              name="gender"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="pronouns">
              Pronouns
            </label>
            <input
              type="text"
              id="pronouns"
              value={this.state.formData.pronouns}
              name="pronouns"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <button className={styles.button}>Update Profile</button>
          </div>
          <Link 
            to='/'
          >
            Cancel
          </Link>
        </form>
      </>
    )
  }
}

export default ProfileUpdate