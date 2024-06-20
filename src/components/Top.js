import React from 'react';
import './common.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 col-md-9 col-12 mb-2 mb-md-0">
            <div className="contact">
              <ul className="">
                <li className='col-md-4 col-12 mb-2 mb-md-0  d-md-block'><span>Call Us:</span> 548978478</li>
                <li className='col-md-4 col-12 mb-2 mb-md-0  d-md-block'><span>Email us:</span> demo@example.com</li>
                <li className='col-md-4 col-12  d-md-block'><span>Our address:</span> 45 Dreem</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <div className="social">
              <ul className="sociallink row justify-content-center justify-content-lg-end">
                <li className='col-3'><a href="/"><img src='../assets/img/facebook.png' alt='Facebook'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/twitter.png' alt='Twitter'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/skype.png' alt='Skype'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/linkedin.png' alt='LinkedIn'></img></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
