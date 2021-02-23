import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Posts from './components/PostIndex/PostIndex'
// import post from '../../data/products-list'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'space-around',
  flexFlow: 'row wrap',
  flexBasis: 'auto',
  margin: '10px',
  padding: '10px'
}

// Below: will be unAuth Product card
const unAuthPostCard = Posts.map(posts => (
  <CardDeck key={posts.id} style={{ width: '25rem' }} >
    <Card style={{ marginBottom: '15%' }} >
      <Card.Title>{posts.title}</Card.Title>
      <Card.Media variant="top" src={posts.media} style={{ width: '100%', margin: 'auto', padding: 'auto' }}/>
      <Card.Body>
        <Card.Text>{posts.message}</Card.Text>
      </Card.Body>
      <Card.Footer>
      </Card.Footer>
    </Card>
  </CardDeck>
)
)

const UnAuthPost = () => (
  <Fragment>
    <div style={cardContainerLayout}>
      { unAuthPostCard }
    </div>
  </Fragment>

)

export default UnAuthPost
