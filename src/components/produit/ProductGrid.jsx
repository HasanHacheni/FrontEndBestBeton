import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link ici
import './ProductGrid.css';

const products = [
    {
        id: 1,
        product_name: "DALLE ALVÉOLÉE",
        thumb: "./image/dalle-alveole-Photoroom.png",
        link: "/CalcDal"
    },
    {
        id: 2,
        product_name: "Poutrelle et Entrevous",
        thumb: "./image/PS-min-1-Photoroom.png",
        link: "/Calcpout"
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
                        <Link to={product.link} className="pro-button-3d">
                            Voir le produit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;