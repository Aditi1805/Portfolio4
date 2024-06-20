import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './common.css'

const Smallcard = () => {
  return (
    <>
      <section className="hero-features-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="hero-features-item text-center">
                <div className="hero-features-icon mb-2">
                  <img src='../assets/img/cat.png' alt='Family Law'></img>
                </div>
                <div className="hero-features-text">
                  <span>Family Law plan</span>
                  <h4>Family Law</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="hero-features-item text-center">
                <div className="hero-features-icon mb-2">
                  <img src='../assets/img/cat.png' alt='Personal Injury'></img>              
                </div>
                <div className="hero-features-text">
                  <span>Personal injury plan</span>
                  <h4>Personal Injury</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="hero-features-item text-center">
                <div className="hero-features-icon mb-2">
                  <img src='../assets/img/cat.png' alt='Criminal Law'></img>              
                </div>
                <div className="hero-features-text">
                  <span>Criminal plan</span>
                  <h4>Criminal Law</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="hero-features-item text-center">
                <div className="hero-features-icon mb-2">
                  <img src='../assets/img/cat.png' alt='Business Law'></img>              
                </div>
                <div className="hero-features-text">
                  <span>Business Law</span>
                  <h4>Business Law Plan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smallcard;
