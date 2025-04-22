import React from 'react';
import Pageservices from './pageservices'; 
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './Service.css'


const Services = () => {
    return (
<div className="Service-Page">
              <Navbar/>
        <div className='Certificate'>
           <Pageservices/>
        </div>
       
          <Footer/>
 </div>


       
    );
};

export default Services;
