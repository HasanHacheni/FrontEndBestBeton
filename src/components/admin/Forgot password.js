import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgot password.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Forgotpassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email must be a valid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      navigate('/login');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="avatar">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
        />
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faUser} /> Username
        </label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? 'error' : ''}
        />
        {errors.username && <small>{errors.username}</small>}
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <small>{errors.email}</small>}
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faLock} /> Password
        </label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <small>{errors.password}</small>}
      </div>

      <button type="submit" className="signup-button">Envoyer</button>
    </form>
  );
};

export default Forgotpassword;
