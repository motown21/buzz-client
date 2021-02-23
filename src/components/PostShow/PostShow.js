import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect } from 'react-router-dom'
import { postShow, postDelete } from '../../api/posts'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap',
  flexBasis: 'auto',
  margin: '10px',
  padding: '10px'
}

class PostShow extends Component {
  constructor (props) {
    super(props)

    // initially our post state will be null, until it is fetched from the api
    this.state = {
      post: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single post
    postShow(match.params.id, user)
      // set the post state, to the post we got back in the response's data
      .then(res => this.setState({ post: res.data.post }))
      .then(() => msgAlert({
        heading: 'Showing post Successfully',
        message: 'The post is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing post Failed',
          message: 'Failed to show post with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = (event, id) => {
    const { user, msgAlert, match } = this.props

    // make a delete axios request
    postDelete(match.params.id, user)
      // set the deleted variable to true, to redirect to the posts page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted post Successfully!',
        message: 'post deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting post Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { post, deleted } = this.state

    // if we don't have a post yet
    if (!post) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the post is deleted
    if (deleted) {
      // return (
      //   <Switch>
      //     <Route exact={true} path='/#' component={Home} />
      //   </Switch>
      // )
      // redirect to the posts index page
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
      // <Redirect to={`/posts/edit/${post._id}`} key={pos._id}/>
    }

    return (
      <div>
        <div style={ cardContainerLayout }>
          <h3>{post.title}</h3><br></br>
          <p>{post.media}</p><br></br>
          <h4>{post.message}</h4>
          <Button vareient='primary' onClick={this.handelDelete}>Delete Post</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(PostShow)
