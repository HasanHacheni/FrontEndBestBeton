import React from "react";
import './ProductGrid.css';

const products = [
    {
        id: 1,
        product_name: "DALLE ALVÉOLÉE",
        thumb: "./image/dalle-alveole-Photoroom.png"
    },
    {
        id: 2,
        product_name: "Poutrelle et Entrevous",
        thumb: "./image/PS-min-1-Photoroom.png"
    },
 
];

const ProductGrid = () => {
    return (
        <div className="Prod">
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.thumb} alt={product.product_name} className="product-image" />
                    <h2 className="product-name">{product.product_name}</h2>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProductGrid;

