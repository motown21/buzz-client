import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import PostForm from '../PostForm/PostForm'
import { postCreate } from '../../api/posts'

class PostCreate extends Component {
  constructor (props) {
    super(props)
    // this state
    this.state = {
      post: {
        title: '',
        media: '',
        message: ''
      },

      createdPostId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { post } = this.state

    postCreate(post, user)
      .then(res => {
        this.setState({ createdPostId: res.data.post._id })
        return res
      })
      .then(res => msgAlert({
        heading: 'Created Post Successfully',
        message: `Post has been created successfully. Now viewing ${res.data.post.title}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create post',
          message: 'Could not create post with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()

    this.setState(state => {
      return {

        post: { ...state.post, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    const { post, createdId } = this.state

    if (createdId) {
      // create posts
      return <Redirect to={`/posts/${createdId}`} />
    }

    return (
      <div>

        <PostForm
          post={post}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default PostCreate
