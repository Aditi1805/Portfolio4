import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="social-newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col col-xs-12">
                <div className="social-newsletter-content clearfix">
                  <div className="social-area">
                  </div>
                  <div className="logo-area">
                    <img src="../assets/img/logo2.png" alt="" />
                  </div>
                  <div className="newsletter-area">
                    <div className="inner">
                      <h3>Newsletter</h3>
                      <form>
                        <div className="input-1">
                          <input type="email" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="submit clearfix">
                          <button type="submit"><i className="fi flaticon-paper-plane"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upper-footer">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-12">
                <div className="widget about-widget">
                  <div className="widget-title">
                    <h3>About us</h3>
                  </div>
                  <p>Showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm</p>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-12">
                <div className="widget contact-widget service-link-widget">
                  <div className="widget-title">
                    <h3>Our Address</h3>
                  </div>
                  <ul>
                    <li>45/15 New alsala Avenew Booston town, Austria</li>
                    <li><span>Phone:</span> 84667441</li>
                    <li><span>Email:</span> demo@example.com</li>
                    <li><span>Office Time:</span> 10AM- 5PM</li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>Usefull Links</h3>
                  </div>
                  <ul>
                    <li><a href="/contact">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6 col-12">
                <div className="widget link-widget line-widget-2">
                  <div className="widget-title">
                    <h3>Practice Area</h3>
                  </div>
                  <ul>
                    <li><a href="/practice-single/Family-Law">Family Law</a></li>
                    <li><a href="/practice-single/Personal-Injury">Personal Injury</a></li>
                    <li><a href="/practice-single/Criminal-Law">Criminal Law</a></li>
                    <li><a href="/practice-single/Education-Law">Education Law</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="container">
            <div className="row">
              <div className="separator"></div>
              <div className="col col-xs-12">
                <p className="copyright">Copyright © 2023 Juristic. All rights reserved.</p>
                <div className="extra-link">
                  <ul>
                    <li><a href="/contact">Privacy &amp; Policy</a></li>
                    <li><a href="/contact">Terms</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/faq">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
