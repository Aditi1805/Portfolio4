import React, { useState } from 'react';
import './common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setValidated(true);
      // Handle form submission (e.g., send data to backend)
    } else {
      setValidated(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Z]/.test(form.name)) {
      newErrors.name = 'Name must start with a capital letter';
    }
    if (!/@/.test(form.email)) {
      newErrors.email = 'Email must contain @ symbol';
    }
    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    if (!form.subject) {
      newErrors.subject = 'Please select a subject';
    }
    if (!form.message) {
      newErrors.message = 'Please provide a case description';
    }

    return newErrors;
  };

  return (
    <section className="contact-section">
      <div className="container bgs-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-info">
              <ul>
                <li>
                  <i className="fi flaticon-home-3"></i>
                  <h4>Head Office</h4>
                  <p>54, Dahs udin sorok, Melborn Austria</p>
                </li>
                <li>
                  <i className="fi flaticon-email"></i>
                  <h4>Email Address</h4>
                  <p>demo@example.com</p>
                </li>
                <li>
                  <i className="fi flaticon-support"></i>
                  <h4>Telephone</h4>
                  <p>654756175+5474</p>
                </li>
                <li>
                  <i className="fi flaticon-clock"></i>
                  <h4>Office Hour</h4>
                  <p>Mon-Sun: 10am – 7pm</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-s2">
              <span>Contact form</span>
              <h2>Need Consultancy, <br /> Request A Free Quote</h2>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc
              </p>
            </div>
            <div className="contact-form">
              <form noValidate onSubmit={handleSubmit} className={`needs-validation ${validated ? 'was-validated' : ''}`} id="contact-form-main">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Name*"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email*"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Your phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.phone}</div>
                </div>
                <div className="form-group">
                  <select
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option disabled value="">Contact subject</option>
                    <option>Family Law</option>
                    <option>Personal Injury</option>
                    <option>Criminal Law</option>
                    <option>Education Law</option>
                    <option>Business Law</option>
                  </select>
                  <div className="invalid-feedback">{errors.subject}</div>
                </div>
                <div className="form-group fullwidth">
                  <textarea
                    name="message"
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Case Description..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">{errors.message}</div>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn-s3">
                    Submit It Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
