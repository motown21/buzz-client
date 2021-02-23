import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>SHARE THE BUZZ</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId=" title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            placeholder='Title'
            // This name should line up with the state we want to change
            name='title'
            value={post.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="media">
          <Form.Label>Media</Form.Label>
          <Form.Control
            required
            placeholder='Upload Media'
            // This name should line up with the state we want to change
            name='media'
            value={post.media}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>message</Form.Label>
          <Form.Control
            required
            placeholder='Post Message'
            // This name should line up with the state we want to change
            name='message'
            value={post.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type='submit'varient='primary'>Post</Button>
      </Form>
    </div>
  </div>
)

export default PostForm
