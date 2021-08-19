import React, { Component, Link } from 'react';
import * as eventService from '../../services/eventService'

import { Form, Button, Select } from 'semantic-ui-react';
import styles from './CreateEventForm.module.css'

const gameTypes = [
  { key: 'mmo', text: 'MMO', value: 'MMO' },
  { key: 'moba', text: 'MOBA', value: 'MOBA' },
  { key: 'shoot', text: 'Shooter', value: 'Shooter' },
  { key: 'ttrpg', text: 'Table Top RPG', value: 'Table Top RPG' },
  { key: 'ttcard', text: 'Table Top Card', value: 'Table Top Card' },
  { key: 'ttboard', text: 'Table Top Board', value: 'Table Top Board' },
]

class CreateEventForm extends Component {
  state = { 
    host: this.props.user.profile,
    type:"",
    name: "",
    address: "",
  
    
   
    }
   

  //  formRef = React.createRef();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSubmit = e => {
		e.preventDefault();
  this.props.handleAddEvent(this.state)
  };

  handleDeleteEvent = e => {
    e.preventDefault()
    this.props.handleDeleteEvent(this.state.formData)
  }

  onSelectChange = (e, data) => {
    this.setState({ type: data.value})
  }

  isFormInvalid() {
    const { name, type, address} = this.state
    return !(name  && type && address)
  }
  
  render() { 
    const { name, type, address} = this.state
    return (
      <>
        <Form
         
        widths='equal'
      autoComplete="off"
      onSubmit={this.handleSubmit}
      className={styles.container}
      onChange={this.handleChange}
        >
          <Form.Group>
            <Form.Field>
            <label
            htmlFor='eventName' >Event Name</label>
            <input
              type='text'
              autoComplete='off'
              id='eventName'
              value={name}
              name='name'
              onChange={this.handleChange}
              placeholder='Enter Name'
              required
            />
            </Form.Field>
            <Form.Field
            control={Select}
            options={gameTypes}
            label={{ children: 'Game Type', htmlFor: 'form-select-control-gameType' }}
            placeholder='Game'
            search
            searchInput={{ id: 'form-select-control-gameType' }}
            required
            onChange={this.onSelectChange}
            />
            <Form.Field>
              <label
              htmlFor='address'>Address</label>
              <input
                type='text'
                autoComplete='off'
                id='address'
                value={address}
                name='address'
                onChange={this.handleChange}
                placeholder='Enter address'
                required
              />
            </Form.Field>
            <Button
              primary
              type="submit"
              disabled={this.invalidForm}
              onClick={this.handleSubmit}
            >Add Event</Button>
          </Form.Group>
        </Form>
        
      </>
    );
  }
}
 
 
export default CreateEventForm;
