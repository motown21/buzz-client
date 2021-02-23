import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, withRouter } from 'react-router-dom'

import { profileShow, profileUpdate } from '../../api/profiles'

import ProfileForm from '../ProfileForm/ProfileForm'

class ProfileUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {
        name: '',
        url: '',
        age: '',
        email: '',
        bio: ''
      },

      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    profileShow(match.params.id, user)
      .then(res => this.setState({ profile: res.data.profile }))
      .then(() => {
        msgAlert({
          heading: 'Showing Profile Successfully',
          variant: 'success',
          message: 'You can now edit the profile.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Showing Profile Failed',
          variant: 'danger',
          message: 'Profile is not displayed due to error: ' + err.message
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { profile } = this.state

    profileUpdate(match.params.id, profile, user)
      .then(res => {
        this.setState({ updated: true })
        return res
      })
      .then(() => {
        msgAlert({
          heading: 'Updated profile Successfully',
          variant: 'success',
          message: 'Profile has been updated.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating profile Failed',
          variant: 'danger',
          message: 'Profile was not updated due to error: ' + err.message
        })
      })
  }

  // same handleChange from profileCreate
  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        profile: { ...this.state.profile, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    const { profile, updated } = this.state

    // if we don't have a profile yet
    if (!profile) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    // if updated
    if (updated) {
      // redirect to the profiles index page
      return <Redirect to={`/profiles/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <h3>Edit Profile</h3>
        <div>
          <ProfileForm
            profile={profile}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileUpdate)
