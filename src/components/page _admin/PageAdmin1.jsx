import React from 'react';

import PageAdmin1 from './page_admin'; // Modifier le nom de l'importation pour respecter la convention

const Admin = () => {
    return (
        <div className="contact-page">
           
            <PageAdmin1 />  {/* Utilisation correcte du composant avec une majuscule */}
        </div>
    );
};

export default Admin;
