import React, { Component } from 'react';

class CreateEventForm extends Component {
  state = { 
    invalidForm: true,
    type:"",
    name: "",
    address: "",
    zipCode: "",
   }
   formRef = React.createRef();

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
    
  };
  
  render() { 
    return (
      <>
        <form 
        ref={this.formRef} 
        onsubmit={this.handleSubmit}
        >
          <input
          type ="location"
          value={this.state.formData}
          onchange={this.handleChange}
          required
          />
          <input
          name="type"
          id="eventChoice"  
          value="event"
          onchange={this.handleChange}
          required
          />
          <input 
          type="text" 
          name="address"
          value="address"
          onchange={this.handleChange}
          required
          />
          <input
          type="number"
          name="zipCode"
          value="zipCode"
          onchange={this.handleChange}
          />
           <button
          type="submit"
    			disabled={this.state.invalidForm}
        >Submit event </button>
        </form>
      </>
    );
  }
}
 
 
export default CreateEventForm;