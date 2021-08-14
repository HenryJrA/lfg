import React, { Component } from 'react';

class CreateEventForm extends Component {
  state = { 
    invalidForm: true,
    
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
        
      </>
    );
  }
}
 
 
export default CreateEventForm;