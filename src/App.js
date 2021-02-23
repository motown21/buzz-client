import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// import authenticaiton components
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
// import UnAuthenticatedRoute from './components/UnAuthenticatedRoute/UnAuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// import Porfile Components
import ProfileIndex from './components/ProfileIndex/ProfileIndex'
import ProfileCreate from './components/ProfileCreate/ProfileCreate'
import ProfileShow from './components/ProfileShow/ProfileShow'
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate'
// import Post components
import PostIndex from './components/PostIndex/PostIndex'
import PostCreate from './components/PostCreate/PostCreate'
import PostShow from './components/PostShow/PostShow'
// import PostDelete from './components/PostDelete/PostDelete'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-profile' render={() => (
            <ProfileCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/profiles' render={() => (
            <ProfileIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/profiles/:id' render={() => (
            <ProfileShow msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/profiles/edit/:id' render={() => (
            <ProfileUpdate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create-post' render={() => (
            <PostCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/posts' render={() => (
            <PostIndex msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/posts/:id' render={() => (
            <PostShow msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App

// <AuthenticatedRoute user={user} exact path='/posts' render={() => (
//   <PostIndex msgAlert={this.msgAlert} user={user} />
// )} />
// <AuthenticatedRoute user={user} exact path='/posts/:id' render={() => (
//   <PostShow msgAlert={this.msgAlert} user={user} />
// )} />
// <AuthenticatedRoute user={user} path='/posts/:id' render={() => (
//   <PostDelete msgAlert={this.msgAlert} user={user} />
// )} />
