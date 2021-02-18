import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { profileIndex } from '../../api/profiles'

class ProfileIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profiles: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    profileIndex(user)

      .then(res => this.setState({ profiles: res.data.profiles }))
      .then(() => msgAlert({
        heading: 'Loaded Profiles Successfully',
        message: 'All profiles retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load profiles!',
          message: 'Could not load profiles with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure our profiles state
    const { profiles } = this.state

    // if we haven't fetched any profiles yet from the API
    if (!profiles) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const profilesJsx = profiles.map(profile => (
      <Link to={`/profiles/${profile._id}`} key={profile._id}>
        <li>
          {profile.name}
          {profile.age}
          {profile.contact}
          {profile.age}
        </li>
      </Link>
    ))

    return (
      <div>
        <h3>Bees</h3>
        <ul>
          {profilesJsx}
        </ul>
      </div>
    )
  }
}

export default ProfileIndex
