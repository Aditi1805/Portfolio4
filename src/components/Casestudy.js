import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css';

const Casestudy = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="section-titles text-center">
            <div className="icon mb-3"></div>
            <span>Here Our Best Work</span>
            <h2>Recent Case Studies</h2>
            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <img className="img-fluid photocourt" src="../assets/img/lowservice.jpg" alt="Case Study 1" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <img className="img-fluid photocourt" src="../assets/img/lowservice.jpg" alt="Case Study 2" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <img className="img-fluid photocourt" src="../assets/img/lowservice.jpg" alt="Case Study 3" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <img className="img-fluid photocourt" src="../assets/img/lowservice.jpg" alt="Case Study 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
