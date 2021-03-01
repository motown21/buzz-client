import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { postIndex } from '../../api/posts'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'

class PostIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    postIndex(user)

      .then(res => this.setState({ posts: res.data.posts }))
      .then(() => msgAlert({
        heading: 'Loaded Posts Successfully',
        message: 'All Posts retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load posts!',
          message: 'Could not load posts with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { posts } = this.state
    if (!posts) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const postsJsx = posts.map(posts => (
      <Link to={`/posts/${posts._id}`} key={posts._id}>
        <li>
          {posts.title}<br></br>
          {posts.media}<br></br>
          {posts.message}
        </li>
      </Link>
    )
    )
    return (
      <div>
        <h3>THE BUZZ</h3>
        <ul>
          {postsJsx}
        </ul>
      </div>
    )
  }
}

export default PostIndex
