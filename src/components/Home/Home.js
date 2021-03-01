import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => (
  <Fragment>
    <Carousel>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.imgur.com/61zvq8z.jpg" className="d-block w-100" alt="photo 1"></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/bvP5glK.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/FS6PGrv.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/E3V6LxO.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/MNrvfiT.jpg" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/8jmAwxe.jpg" className="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Carousel>
  </Fragment>

)
export default Home
