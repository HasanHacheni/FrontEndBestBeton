import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_luto2ad',          // Remplacez par votre Service ID EmailJS
      'template_tfvw5jx',         // Remplacez par votre Template ID EmailJS
      form.current,
      'Vnrganh8D1rnOAe3A'         // Remplacez par votre User ID EmailJS
    )
    .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
        alert('Votre message a été envoyé !');
    }, (error) => {
        console.error("Erreur lors de l'envoi de l'email:", error.text);
        alert('Une erreur est survenue, veuillez réessayer.');
    });
  };


  return (
    <div className="contact-container">
      <h1 className="contact-logo">Contactez-nous</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="contact-label">Nom</label>
        <input type="text" name="user_name" className="contact-input" required />

        <label className="contact-label">Email</label>
        <input type="email" name="user_email" className="contact-input" required />
        <label className="contact-label">Post</label>
        <input type="text" name="user_Post" className="contact-input" required />
        <label className="contact-label">Socité</label>
        <input type="text" name="user_Socité" className="contact-input" required />

        <label className="contact-label">Téléphone</label>
        <input type="number" name="user_number" className="contact-input" required />
          
        <label className="contact-label">Message</label>
        <textarea name="message" className="contact-textarea" required />

        <button type="submit" className="contact-button">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
