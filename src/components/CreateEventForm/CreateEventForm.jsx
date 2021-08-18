import React, { Component, Link } from 'react';
import * as eventService from '../../services/eventService'
import * as apiService from '../../services/apiService'
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


// class CreateEventForm extends Component {
//   state = { 
//     invalidForm: true,
    
//     formData: {
//       host: this.props.user,
//       type:"",
//       name: "",
//       address: "",
//       zipCode: "",
//     },
//    }

//    formRef = React.createRef();

// 	handleChange = e => {
//     console.log(e.target)
//     const formData = {...this.state.formData, [e.target.name]: e.target.value};
// 		this.setState({
// 		formData,
// 		invalidForm: !this.formRef.current.checkValidity()
// 		});
// 	};

//   handleSubmit = e => {
// 		e.preventDefault();
//   eventService.createEvent(this.state.formData)
//   .then(res=> this.props.history.push('/events'))
    
//   };
//   handleDeleteEvent = e => {
//     e.preventDefault()
//     this.props.handleDeleteEvent(this.state.formData)
//   }
  
//   render() { 
//     return (
//       <>
      
//         <form 
//         ref={this.formRef} 
//         onSubmit={this.handleSubmit}
//         >
//           <input
//           type ="text"
//           name='name'
//           onChange={this.handleChange}
//           placeholder='Event Name'
//           required
//           value={this.state.formData.name}
//           />
//           <input
//           name="type"
//           id="eventChoice"  
//           placeholder='Type of event'
//           onChange={this.handleChange}
//           value={this.state.formData.type}
//           required
//           />
//           <input 
//           type="text" 
//           name="address"
//           placeholder="address/city/state"
//           onChange={this.handleChange}
//           value={this.state.formData.address}
//           required
//           />
//           <input
//           type="text"
//           name="zipCode"
//           placeholder="Zip Code (optional)"
//           onChange={this.handleChange}
//           value={this.state.formData.zipCode}
//           />
//           <input
//           value={this.props.user}
//           name="host"
//           hidden="true"
//           />
//            <button
//           type="submit"
//     			disabled={this.invalidForm}
//           onClick={this.handleSubmit}
//         >Submit event </button>
//         </form>
//       </>
//     );
//   }
// }
 
 
// export default CreateEventForm;