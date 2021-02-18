import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import { profileShow, profileDelete } from '../../api/profiles'

class ProfileShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single Profile
    profileShow(match.params.id, user)
      // set the Profile state, to the Profile we got back in the response's data
      .then(res => this.setState({ profile: res.data.profile.id }))
      .then(() => msgAlert({
        heading: 'Showing Profile Successfully',
        message: 'The Profile is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Profile Failed',
          message: 'Failed to show Profile with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    // make a delete axios request
    profileDelete(match.params.id, user)
      // set the deleted variable to true, to redirect to the Profiles page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Profile Successfully!',
        message: 'Profile deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting Profile Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { profile, deleted } = this.state

    // if we don't have a Profile yet
    if (!profile) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the Profile is deleted
    if (deleted) {
      return <Redirect to="/profiles" />
    }

    return (
      <div>
        <h3>{profile.name}</h3>
        <h4>age: {profile.age}</h4>
        <button onClick={this.handleDelete}>Delete Profile</button>
        <button>
          <Link to={`/profiles/${profile._id}/edit`}>Update Profile</Link>
        </button>
      </div>
    )
  }
}

export default withRouter(ProfileShow)
