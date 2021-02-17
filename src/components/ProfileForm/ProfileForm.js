import React from 'react'

const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      required
      placeholder='Enter profile title'
      // This name should line up with the state we want to change
      name='name'
      value={profile.name}
      onChange={handleChange}
    />
    <label>Photo</label>
    <input
      required
      placeholder='upload image'
      name='url'
      value={profile.url}
      onChange={handleChange}
    />
    <label>Age</label>
    <input
      required
      placeholder='how old are you'
      name='age'
      value={profile.age}
      onChange={handleChange}
    />
    <label>Contact</label>
    <input
      required
      placeholder='email@com'
      name='email'
      value={profile.email}
      onChange={handleChange}
    />
    <label>Bio</label>
    <input
      required
      placeholder='short bio'
      name='bio'
      value={profile.bio}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)

export default ProfileForm
