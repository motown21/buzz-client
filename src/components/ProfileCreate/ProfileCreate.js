import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileForm from '../ProfileForm/ProfileForm'
import { profileCreate } from '../../api/profiles'

class ProfileCreate extends Component {
  constructor (props) {
    super(props)
    // this state
    this.state = {
      profile: {
        name: '',
        url: '',
        age: '',
        email: '',
        bio: ''
      },

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

        return res
      })
      .then(res => msgAlert({
        heading: 'Created Profile Successfully',
        message: `Profile has been created successfully. Now viewing ${res.data.profile.title}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Profile',
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
      // create profiles
      return <Redirect to={`/profiles/${createdId}`} />
    }

    return (
      <div>
        <h3>Create Profile</h3>
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
