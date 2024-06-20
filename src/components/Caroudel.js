import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './common.css';

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container" indicators={false}>
      <Carousel.Item style={{ backgroundImage: "url('../assets/img/law.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className='container'>
          <div className='row main'>
            <div className='con1'>
              <div className='main-heading'>
                <h2>Our Independence Makes the Difference</h2>
              </div>
              <div className='small-heading'>
                <p>Nationally Established. Internationally Recognized</p>
              </div>
              <div className='caroude-button'>
                <Link className='button-1' to="/contact">Get In Touch</Link>
              </div>
            </div>
            <div className='con2'>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: "url('../assets/img/pelace.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className='container'>
          <div className='row main'>
            <div className='con1'>
              <div className='main-heading'>
                <h2>Our Independence Makes the Difference</h2>
              </div>
              <div className='small-heading'>
                <p>Nationally Established. Internationally Recognized</p>
              </div>
              <div className='caroude-button'>
                <Link className='button-1' to="/contact">Get In Touch</Link>
              </div>
            </div>
            <div className='con2'>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: "url('../assets/img/people.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className='container'>
          <div className='row main'>
            <div className='con1'>
              <div className='main-heading'>
                <h2>Our Independence Makes the Difference</h2>
              </div>
              <div className='small-heading'>
                <p>Nationally Established. Internationally Recognized</p>
              </div>
              <div className='caroude-button'>
                <Link className='button-1' to="/contact">Get In Touch</Link>
              </div>
            </div>
            <div className='con2'>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
