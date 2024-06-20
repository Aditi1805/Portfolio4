import React from 'react';
import './common.css';

const Latestblog = () => {
  return (
    <section className="blog-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="section-title-s4">
              <div className="icon"><i className="fi flaticon-light-bulb"></i></div>
              <span>Latest Blog</span>
              <h2>Check Our Latest Tips & News</h2>
              <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt showed a lady fitted</p>
              <a className="theme-btn" href="/blog">More Blog Post</a>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <div className="blog-grids clearfix">
              <div className="grid">
                <div className="entry-media">
                  <img src="../assets/img/backgounfimag.jpg" className="img-fluid" alt="Blog Image" />
                </div>
                <div className="entry-details">
                  <div className="cat">Advocate, Law</div>
                  <h3><a href="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Provide insight into how canna businesspeople can use</a></h3>
                  <a className="read-more" href="/blog-single/Provide-insight-into-how-canna-businesspeople-can-use">Read More</a>
                </div>
              </div>
              <div className="grid">
                <div className="entry-media">
                  <img src="../assets/img/backgounfimag.jpg" className="img-fluid" alt="Blog Image" />
                </div>
                <div className="entry-details">
                  <div className="cat">Lawyer, Law</div>
                  <h3><a href="/blog-single/Canna-Law-Blog-is-a-forum-for-discussing-the-practical">Canna Law Blog is a forum for discussing the practical</a></h3>
                  <a className="read-more" href="/blog-single/Canna-Law-Blog-is-a-forum-for-discussing-the-practical">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestblog;
