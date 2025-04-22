import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Composant pour afficher les icônes sociales
const SocialIcons = ({ icons }) => (
  <div className="social-icons">
    {icons.map((icon, index) => (
      <a href={icon.link} key={index} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon.icon} className="icon" />
      </a>
    ))}
  </div>
);

const Footer = () => {
  const socialLinks = [
    { icon: faInstagram, link: 'https://www.instagram.com' },
    { icon: faLinkedin, link: 'https://www.linkedin.com' },
    { icon: faFacebook, link: 'https://www.facebook.com' },
    { icon: faYoutube, link: 'https://www.youtube.com' }
  ];

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
          <p> Djebel Oust, Délégation Bir Mchargua – CP: 1111. Zaghouan, (Tunisie)</p>
          <p>(+216) 52 500 050</p>
          <p>contact@bestbeton.com.tn</p>
          
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Opening</h3>
          <p> Lun - Ven: 8:00 - 17:00</p>
          <p>Samedi: 8:00 - 14:00</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">À PROPOS</h3>
          <p>Bestbeton bénéficie d’une qualité de produits certifiés pour assurer une infrastructure fiable au service de notre Tunisie.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <SocialIcons icons={socialLinks} />
        <p>&copy; Copyright 2024 BEST BETON</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
