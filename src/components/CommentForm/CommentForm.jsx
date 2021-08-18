import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    formData: {
      comment: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()

  }

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({formData});
	};

  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <textarea
          name='comment'
          value={this.state.formData}
          onChange={this.handleChange}
        />
        <button type='submit'>
          Add Comment
        </button>
      </form>
      </>
    )
  }
}

export default CommentForm