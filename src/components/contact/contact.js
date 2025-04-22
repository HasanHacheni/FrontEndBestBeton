import React from 'react';
import ContactForm from './ContactForm'; 
import Navbar from '../../components/navbar/navbar';
import Footer from '../footer/footer';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact-page">
                  <Navbar />
                  <div className='Form'> <ContactForm /></div>
                
                 <Footer/>
        </div>
    );
};

export default Contact;
