import React from 'react';

const Memorial = () => {
  return (
    <>
      <div className='about-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12 mb-4 mb-lg-0'>
              <div className="left-col">
                <div className="section-title">
                  <div className="icon">
                    {/* Icon content */}
                  </div>
                  <span>TESTIMONIALS</span>
                  <h2>What Our Clients Say About Us</h2>
                  <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc. It showed a lady fitted out.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12 mb-4 mb-lg-0'>
              <div className="right-col">
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero.</p>
                <div className='client-infos'>
                  <div className='img-holder'>
                    <img src='../assets/img/lowservice.jpg' alt="Client" />
                  </div>
                  <h3>David Miller</h3>
                  <span>Designer UK</span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12'>
              <div className="right-col">
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero.</p>
                <div className='client-infos'>
                  <div className='img-holder'>
                    <img src='../assets/img/lowservice.jpg' alt="Client" />
                  </div>
                  <h3>David Miller</h3>
                  <span>Designer UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Memorial;
