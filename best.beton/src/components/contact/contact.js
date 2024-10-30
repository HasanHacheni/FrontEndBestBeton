import React from 'react';
import ContactForm from './ContactForm'; 
import Navbar from '../../components/navbar/navbar';
import Video from '../navbar/Video';
import Footer from '../footer/footer';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar/>
            <Video/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Contact;
