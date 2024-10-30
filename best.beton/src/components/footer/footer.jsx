import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li><i className="fas fa-angle-right"></i> About Us</li>
            <li><i className="fas fa-angle-right"></i> Contact Us</li>
            <li><i className="fas fa-angle-right"></i> Reservation</li>
            <li><i className="fas fa-angle-right"></i> Privacy Policy</li>
            <li><i className="fas fa-angle-right"></i> Terms & Condition</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Opening</h3>
          <p>Monday - Saturday: 09AM - 09PM</p>
          <p>Sunday: 10AM - 08PM</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">SIGNUP</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Your Site Name, All Rights Reserved.</p>
        <div className="footer-links">
        
          <a href="">Home</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
