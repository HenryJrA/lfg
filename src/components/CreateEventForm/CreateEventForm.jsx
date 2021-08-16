import React, { Component } from 'react';
import * as eventService from '../../services/eventService'
import * as apiService from '../../services/apiService'

class CreateEventForm extends Component {
  state = { 
    invalidForm: true,
    
    formData: {
      host: this.props.user,
      type:"",
      name: "",
      address: "",
      zipCode: "",
    },
   }

   formRef = React.createRef();

	handleChange = e => {
    console.log(e.target)
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
  eventService.createEvent(this.state.formData)
  .then(res=> this.props.history.push('/'))
    
  };
  handleDeleteEvent = e => {
    e.preventDefault()
    this.props.handleDeleteEvent(this.state.formData)
  }
  handleEditEvent = e =>{
    e.preventDefault()
    this.props.handleEditEvent(this.state.formData)
  }
  
  render() { 
    return (
      <>
      
        <form 
        ref={this.formRef} 
        onSubmit={this.handleSubmit}
        >
          <input
          type ="text"
          name='name'
          onChange={this.handleChange}
          placeholder='Event Name'
          required
          value={this.state.formData.name}
          />
          <input
          name="type"
          id="eventChoice"  
          placeholder='Type of event'
          onChange={this.handleChange}
          value={this.state.formData.type}
          required
          />
          <input 
          type="text" 
          name="address"
          placeholder="address/city/state"
          onChange={this.handleChange}
          value={this.state.formData.address}
          required
          />
          <input
          type="text"
          name="zipCode"
          placeholder="Zip Code (optional)"
          onChange={this.handleChange}
          value={this.state.formData.zipCode}
          />
          <input
          value={this.props.user}
          name="host"
          hidden="true"
          />
           <button
          type="submit"
    			disabled={this.invalidForm}
          onClick={this.handleSubmit}
        >Submit event </button>
        </form>
      </>
    );
  }
}
 
 
export default CreateEventForm;