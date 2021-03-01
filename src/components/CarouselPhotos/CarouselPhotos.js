import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import photo from '../data/data-list'

const cardContainerLayout = {
  width: '100%',
  height: '100%',
  padding: '10px',
  margin: '5px'
}
const dblock = {
  width: '100%',
  height: '550px',
  alignSelf: 'center'
}
const CarouselPhotos = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
      <Carousel style={cardContainerLayout}>
        <Carousel.Item>
          <img
            style={dblock}
            src={photo[4].Url}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={dblock}
            src={photo[3].Url}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={dblock}
            src={photo[2].Url}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={dblock}
            src={photo[1].Url}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={dblock}
            src={photo[0].Url}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselPhotos
