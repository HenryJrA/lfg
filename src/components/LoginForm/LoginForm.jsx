import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
import { Button, Form } from 'semantic-ui-react'
import * as authService from '../../services/authService'

class LoginForm extends Component {
  state = {
    email: '',
    pw: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props
    e.preventDefault()
    try {
      await authService.login(this.state);
      handleSignupOrLogin()
      history.push("/")
    } catch (err) {
        alert('Invalid Credentials')
    }
  }

  render() {
    const { email, pw } = this.state
    return (
      <Form

      
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.container}
      >
     
          <Form.Field
          className={styles.inputContainer}
          >
          <label
          htmlFor="email">email<br/></label>
          <input 
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={this.handleChange}
          placeholder="enter email adress" />
          </Form.Field>
          <Form.Field
          
          >
          <label
          htmlFor="password" 
      
          >Password<br/></label>
         <input 
          type="password"
          autoComplete="off"
          id="password"
          value={pw}
          name="pw"
          onChange={this.handleChange}
         />
          </Form.Field>
<Form.Field>
  <Button 
  primary
  className={styles.button}
  type='submit'
  >Login</Button>
  <Button 
  negative
className={styles.button}
type='submit'
  >Cancel</Button>
  
</Form.Field>
<Link to="/"/>
       
       
        </Form>
    )
  }
}

export default LoginForm


