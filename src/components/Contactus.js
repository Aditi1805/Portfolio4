import React from 'react';
import './common.css';

const Contactus = () => {
  return (
    <>
      <section className="cta-section d-flex align-items-center justify-content-center">
        <div className="container bg-container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 text-center">
              <div className="cta-content">
                <div className="cta-logo mb-3">
                  <img src="../assets/img/logo2.png" alt="Logo" className="img-fluid" />
                </div>
                <h5>Call us 24/7</h5>
                <h2>545-75797-897</h2>
                <a className="theme-btn-s3 mt-3" href="/contact">Make An Appointment</a>
               
              </div>
            </div>
          </div>
          <div className='info-col2'></div>
        </div>



      </section>
    </>
  );
}

export default Contactus;
