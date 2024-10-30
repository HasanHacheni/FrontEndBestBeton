import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-header">
        <h2>Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Matthew"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="matthew@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="ex90"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            placeholder="Your comments..."
            value={formData.message}
            onChange={handleChange}
            
          />
        </div>
        <Link to={'/'}  className="submit-btn">
          Send Now
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
