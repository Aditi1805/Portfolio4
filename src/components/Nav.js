import React, { useEffect, useState } from 'react';
import './common.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [navbarClass, setNavbarClass] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('fixed-top bg-dark');
    } else {
      setNavbarClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 col-12">
              <div className="contact">
                {/* Contact information can go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={navbarClass}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand col-2" to='/'>
              <img src='../assets/img/logo.png' alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
