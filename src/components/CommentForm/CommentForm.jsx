import React, { Component } from 'react'
import styles from './CommentForm.module.css'


class CommentForm extends Component {
  state = {
    formData: {
      content: '',
      author: this.props.user
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.props.handleAddComment(this.state.formData, this.props.event)

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
          name='content'
          value={this.state.formData.comment}
          onChange={this.handleChange}
        />
        <button 
        className={styles.edit}
        onClick={this.handleSubmit}
        type='submit'>
          Add Comment
        </button>
      </form>
      </>
    )
  }
}

export default CommentForm