import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect } from 'react-router-dom'
import { profileShow, profileDelete } from '../../api/profiles'
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

class ProfileShow extends Component {
  constructor (props) {
    super(props)

    // initially our profile state will be null, until it is fetched from the api
    this.state = {
      profile: null,
      deleted: false,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single profile
    profileShow(match.params.id, user)
      // set the profile state, to the profile we got back in the response's data
      .then(res => this.setState({ profile: res.data.profile }))
      .then(() => msgAlert({
        heading: 'Showing profile Successfully',
        message: 'The profile is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing profile Failed',
          message: 'Failed to show profile with error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  updateProfile = (event) => {
    this.setState({ updated: true })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    // make a delete axios request
    profileDelete(match.params.id, user)
      // set the deleted variable to true, to redirect to the profiles page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted profile Successfully!',
        message: 'profile deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting profile Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { profile, deleted, updated } = this.state

    // if we don't have a profile yet
    if (!profile) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the profile is deleted
    if (deleted) {
      // redirect to the profiles index page
      return <Redirect to="/profiles" />
    }
    if (updated) {
      return <Redirect to={`/profiles/edit/${profile._id}`} key={profile._id}/>
    }

    return (
      <div>
        <div style={ cardContainerLayout }>
          <h3>{profile.name}</h3><br></br>
          <p>Bio: {profile.bio}</p><br></br>
          <h4>Age: {profile.age}</h4>
          <Button vareient='primary' onClick={this.handelDelete}>Delete Profile</Button>
          <Button vareint='primaty' onClick={this.updateProfile}>Edit Profile</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileShow)
