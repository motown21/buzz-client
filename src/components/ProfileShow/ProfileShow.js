import React, { Component, Fragment } from 'react'
// import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import { profileShow, profileDelete } from '../../api/profiles'
// import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'

// const cardContainerLayout = {
//   display: 'flex',
//   justifyContent: 'space-around',
//   flexFlow: 'row wrap',
//   flexBasis: 'auto',
//   margin: '10px',
//   padding: '10px'
// }

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
      .then(res => this.setState({ profile: res.data.profile }))
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
    let profileJsx
    // if the Profile is deleted
    if (deleted) {
      return <Redirect to="/profiles" />
    }
    // if we don't have a Profile yet
    if (!profile) {
      // return loading image
      return (
        profileJsx = <img style={{ width: '30%' }}
          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="loading gif"/>
      )
    }
    profileJsx = (
      <Fragment>
        <h3>{profile.name}</h3>
        <p>Bio: {profile.bio}</p>
        <h4>Age: {profile.age}</h4>
        <button onClick={this.handelDelete}>Delete Profile</button>
        <button>
          <Link to={`/profiles/${profile._id}`}>Edit Profile</Link>
        </button>
      </Fragment>
    )
    return (
      <Fragment>
        <h2>My Profile</h2>
        {deleted ? <Redirect to="/profiles"/> : profileJsx}
      </Fragment>
    )
  }
}

export default withRouter(ProfileShow)
