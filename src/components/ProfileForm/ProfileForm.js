import React from 'react'

const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      required
      placeholder='Name'
      // This name should line up with the state we want to change
      name='name'
      value={profile.name}
      onChange={handleChange}
    />
    <label>Photo</label>
    <input
      required
      placeholder='Upload image'
      // This name should line up with the state we want to change
      name='url'
      value={profile.url}
      onChange={handleChange}
    />
    <label>Age</label>
    <input
      required
      placeholder='Enter Age'
      // This name should line up with the state we want to change
      name='age'
      value={profile.age}
      onChange={handleChange}
    />
    <label>Contace</label>
    <input
      required
      placeholder='Enter Email'
      // This name should line up with the state we want to change
      name='email'
      value={profile.email}
      onChange={handleChange}
    />
    <label>Bio</label>
    <input
      required
      placeholder='Bio '
      // This name should line up with the state we want to change
      name='bio'
      value={profile.bio}
      onChange={handleChange}
    />
    <button type='submit'varient='primary'>Submit</button>
  </form>
)

export default ProfileForm
