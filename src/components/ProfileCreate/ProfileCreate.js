import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileForm from '../ProfileForm/ProfileForm'
import { profileCreate } from '../../api/profile'

class ProfileCreate extends Component {
  constructor (props) {
    super(props)

    // initially our profiles title and director will be empty until they are filled in
    this.state = {
      profile: {
        name: '',
        url: '',
        age: '',
        email: '',
        bio: ''
      },
      // createdId will be null, until we successfully create a profile
      createdId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { profile } = this.state

    profileCreate(profile, user)
      .then(res => {
        this.setState({ createdId: res.data.profile._id })
        // pass the response to the next .then so we can show the title
        return res
      })
      .then(res => msgAlert({
        heading: 'Created profile Successfully',
        message: `profile has been created successfully. Now viewing ${res.data.profile.title}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create profile',
          message: 'Could not create profile with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()

    this.setState(state => {
      return {
        profile: { ...state.profile, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    const { profile, createdId } = this.state

    if (createdId) {
      // redirect to the profiles show page
      return <Redirect to={`/profiles/${createdId}`} />
    }

    return (
      <div>
        <h3>Create profile</h3>
        <ProfileForm
          profile={profile}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default ProfileCreate
