import React from 'react';
import ProductGrid from './ProductGrid';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Shop = () => {
    return (
        <div className="contact-page">
            <Navbar/>
          
            <ProductGrid/>
            <Footer/>
        
        </div>
    );
};

export default Shop;