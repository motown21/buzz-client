import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Dropdown from 'react-bootstrap/Dropdown'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>

    <Nav.Link href="#create-profile">Create Profile</Nav.Link>
    <Nav.Link href="#profiles/_id">My Profile</Nav.Link>
    <Nav.Link href="#profiles">The Hive</Nav.Link>

    <Nav.Link href="#create-post">Create Post</Nav.Link>
    <Nav.Link href="#posts/_id">My BUZZ</Nav.Link>
    <Nav.Link href="#posts">THE BUZZ</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      BUZZ 🐝
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span> }
        {/* // user && <NavDropdown title={user.user_name} id="basic-nav-dropdown" className="dropdownitem"> */}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

// <NavDropdown.Toggle id="dropdown-basic" variant="success">Settings</NavDropdown.Toggle>
// { alwaysOptions }
// <Fragment>
//   <Nav.Link href="#change-password">Change Password</Nav.Link>
//   <Nav.Link href="#sign-out">Sign Out</Nav.Link>

//   <Nav.Link href="#create-profile">Create Profile</Nav.Link>
//   <Nav.Link href="#profiles/_id">My Profile</Nav.Link>
//   <Nav.Link href="#profiles">The Hive</Nav.Link>

//   <Nav.Link href="#create-post">Create Post</Nav.Link>
//   <Nav.Link href="#posts/_id">My BUZZ</Nav.Link>
//   <Nav.Link href="#posts">THE BUZZ</Nav.Link>
// </Fragment>

// <NavDropdown>
//   <NavDropdown.Button id="dropdown-item-button" title="Settings">
//     <NavDropdown.Item as="button" href="#change-password">Change Password</NavDropdown.Item>
//     <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
//   </NavDropdown.Button>

//   <NavDropdown.Button id="dropdown-item-button" title="Profile">
//     <NavDropdown.Item href="#create-profile">Create Profile</NavDropdown.Item>
//     <NavDropdown.Item href="#profiles/_id">My Profile</NavDropdown.Item>
//     <NavDropdown.Item href="#profiles">The Hive</NavDropdown.Item>
//   </NavDropdown.Button>
// </NavDropdown>
// </Fragment>
