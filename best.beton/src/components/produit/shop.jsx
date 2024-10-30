import React from 'react';
import ProductGrid from './ProductGrid';
import Navbar from '../navbar/navbar';
import Video from '../navbar/Video';
const Shop = () => {
    return (
        <div className="contact-page">
            <Navbar/>
            <Video/>
            <ProductGrid/>
         
        </div>
    );
};

export default Shop;