import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import { Form, Button, Select } from 'semantic-ui-react'


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Non-Binary', value: 'Non-Binary' },
]



class SignupForm extends Component {
  state = { 
    name: '',
    email: '',
    gender: '',
    pronouns: '',
    password: '',
    passwordConf: '',

   }

  onSelectChange = (e, data) => {
    this.setState({ gender: data.value})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

    
  handleSubmit = async e => {
    const { history, updateMessage, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.signup(this.state)
      handleSignupOrLogin()
      history.push('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  isFormInvalid() {
    const { name, email, password, passwordConf, gender, pronouns } = this.state
    return !(name && email && pronouns && gender && password === passwordConf)
  }


  render() { 
    const { name, email, password, passwordConf, gender, pronouns } = this.state
    return ( 
      <Form 
      widths='equal'
      autoComplete="off"
      onSubmit={this.handleSubmit}
      className={styles.container}
      onChange={this.handleChange}
      >
        <Form.Group
        >        
          <Form.Field
          className={styles.inputContainer}
          >
           <label
            htmlFor='name' >Name</label>
            <input
              type='text'
              autoComplete='off'
              id='name'
              value={name}
              name='name'
              onChange={this.handleChange}
              placeholder='Enter Name'
              required
            />
          </Form.Field>
           <Form.Field
              className={styles.inputContainer}
          >
            <label
            htmlFor='email'>Email</label>
            <input
              type='text'
              autoComplete='off'
              id='email'
              value={email}
              name='email'
              onChange={this.handleChange}
              placeholder='Email adress'
              required
            />
            </Form.Field>
            </Form.Group>
            <Form.Group
            
            >
            <Form.Field
            control={Select}
            options={genderOptions}
            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
            placeholder='Gender'
            search
            searchInput={{ id: 'form-select-control-gender' }}
            required
            onChange={this.onSelectChange}
            > 
            </Form.Field>
            <Form.Field
            >
              <label
              htmlFor='pronouns'>Pronouns</label>
              <input
               type='text'
               autoComplete='off'
               id='pronouns'
               value={pronouns}
               name='pronouns'
               onChange={this.handleChange}
               placeholder='Enter pronouns'
               required

              />
            </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
              <label
              htmlFor='password'>Password</label>
              <input
               type='password'
               autoComplete='off'
               id='password'
               value={password}
               name='password'
               onChange={this.handleChange}
               placeholder='Enter password'
               required
               />
              </Form.Field>               
              <Form.Field>
              <label
              htmlFor='passwordConf'>Confirm password</label>
              <input
               type='password'
               autoComplete='off'
               id='passwordConf'
               value={passwordConf}
               name='passwordConf'
               onChange={this.handleChange}
               placeholder='Confirm password'
               required
               />
              </Form.Field>
            </Form.Group>
            <Button.Group>
              <Button 
            
              disabled={this.isFormInvalid()}
              primary>
                Sign Up</Button>
                <Link to='/'>
              <Button  color='red'>Cancel</Button>
                </Link>
            </Button.Group>

      </Form>

     );
  }
}
 
export default SignupForm;
