import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Profile</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            placeholder='Name'
            // This name should line up with the state we want to change
            name='name'
            value={profile.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            required
            placeholder='Upload image'
            // This name should line up with the state we want to change
            name='url'
            value={profile.url}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            placeholder='Enter Age'
            // This name should line up with the state we want to change
            name='age'
            value={profile.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            placeholder='Enter Email'
            // This name should line up with the state we want to change
            name='email'
            value={profile.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            required
            placeholder='Bio '
            type='textArea'
            // This name should line up with the state we want to change
            name='bio'
            value={profile.bio}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type='submit'varient='primary'>Submit</Button>
      </Form>
    </div>
  </div>
)

export default ProfileForm
