import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditEvent extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.event
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEditEvent(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
		const { type, name, address, zipCode } = this.state.formData
    return (
      <>
        <h1>Edit Event</h1>
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
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            Save New Event 
          </button>
          <button>
          <Link 
            className='btn btn-danger m-left'
            to='/'
            
            >
            Cancel
          </Link>
              </button>
        </form>
      </>
    );
  }
}

export default EditEvent;