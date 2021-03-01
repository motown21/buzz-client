import React, { Component } from 'react'
// import { profile } from '../../api/profiles'
// import { Post } from '../../api/posts'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

class UnAuthCard extends Component {
  constructor (props) {
    super(props)
    // initially our profile state will be null, until it is fetched from the api
    this.state = {
      post: true
    }
  }
  render () {
    return (
      <CardColumns>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title> </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src="holder.js/100px160" />
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    )
  }
}
export default UnAuthCard

// const cardContainerLayout = {
//   display: 'flex',
//   justifyContent: 'space-around',
//   flexFlow: 'row wrap',
//   flexBasis: 'auto',
//   margin: '10px',
//   padding: '10px'
// }
// class UnAuthenticatedCards {
//   constructor (props) {
//     super(props)

//     // initially our profile state will be null, until it is fetched from the api
//     this.state = {
//       // profile: true,
//       post: true

//     }
//   }

// // const unAuthProfileCard = profile.map(profile => (
// //   <CardDeck key={profile.id} style={{ width: '25rem' }} >
// //     <Card style={{ marginBottom: '15%' }} >
// //       <Card.Url variant="top" src={profile.Url} style={{ width: '100%', margin: 'auto', padding: 'auto' }} />
// //       <Card.Body>
// //         <Card.Title>{profile.name} </Card.Title>
// //         <Card.Text>Bio: {profile.bio} </Card.Text>
// //         <Card.Title>Age: {profile.age} </Card.Title>
// //       </Card.Body>
// //       <Card.Footer>
// //         <Button vareient='primary' onClick={this.handelDelete}>Delete Profile</Button>
// //         <Button vareint='primaty' onClick={this.updateProfile}>Edit Profile</Button>
// //       </Card.Footer>
// //     </Card>
// //   </CardDeck>
// // )
// // )
// const unAuthPostCard = post.map(post => (
//   <CardDeck key={post.id} style={{ width: '25rem' }} >
//     <Card style={{ marginBottom: '15%' }} >
//       <Card.Url variant="top" src={post.media} style={{ width: '100%', margin: 'auto', padding: 'auto' }} />
//       <Card.Body>
//         <Card.Title>{post.title} </Card.Title>
//         <Card.Text>Message: {post.message} </Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <Button vareient='primary'> View More</Button>
//       </Card.Footer>
//     </Card>
//   </CardDeck>
// )
// )
// const UnAuthCard = () => (
//   <Fragment>
//     <div style={cardContainerLayout}>
//       { unAuthProfileCard }
//       { unAuthPostCard }
//     </div>
//   </Fragment>

// )

// export default UnAuthenticatedCard
