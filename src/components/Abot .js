import React from 'react';
import './common.css'; // Import the custom CSS file

const Abot = () => {
    return (
        <div className='about-section d-flex align-items-center'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-12 mb-4 mb-lg-0'>
                        <div className="left-col">
                            <div className="section-title">
                                <div className="icon">
                                    {/* Icon content */}
                                </div>
                                <span>About juristic</span>
                                <h2>We are the most popular law firm with various law services!</h2>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                                <a className="more-about" href="/about">Read More About us
                                    <i className="fi flaticon-next-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12 mb-4 mb-lg-0'>
                        <div className="mid-col">
                            <img src="../assets/img/ceo.jpg" alt="CEO"/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className="right-col">
                            <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero.</p>
                            <div className="quoter">
                                <h4>Michel Jhon</h4>
                                <span>- CEO of the company</span>
                            </div>
                            <div className="signature">
                                <img src='../assets/img/ceosign.png' alt="CEO Signature"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abot;
