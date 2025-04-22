import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Pageservices.css';

const PageServices = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.service-icon');
    icons.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 0.1}s`; // Ajoute un délai d'animation pour chaque icône
    });
  }, []);

  return (
    <div className="portfolio-container">
     
      {/* Certificates Section */}
      <div className="certificates">
        <h2>CERTIFICATS</h2>
        <div className="certificate-list">
          <div className="certificate">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>  {/* Icône pour Sécurité */}
            </div>
            <h3>SÉCURITÉ</h3>
            <p>La sécurité est une priorité avec des valeurs d'amélioration continue.</p>
          </div>
          <div className="certificate">
            <div className="service-icon">
              <i className="fas fa-users"></i>  {/* Icône pour Communauté */}
            </div>
            <h3>COMMUNAUTÉ</h3>
            <p>Engagés dans la coopération avec la communauté locale.</p>
          </div>
          <div className="certificate">
            <div className="service-icon">
              <i className="fas fa-leaf"></i>  {/* Icône pour Durabilité */}
            </div>
            <h3>DURABILITÉ</h3>
            <p>Engagement pour des constructions durables et respectueuses de l'environnement.</p>
          </div>
          <div className="certificate">
            <div className="service-icon">
              <i className="fas fa-trophy"></i>  {/* Icône pour Qualité */}
            </div>
            <h3>QUALITÉ</h3>
            <p>Conformes aux normes de qualité et fiabilité élevées.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PageServices;
