import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Shop from './components/produit/shop';
import Contact from './components/contact/contact';
import Dashbord from './components/dashbord/dashbord';
import Services from './components/service/services';
import CalcDal from './components/CalcDal/SlabCalculator';
import Calcpout from './components/CalcPout/Calcpout';
import Login from './components/admin/login';
import Forgotpassword from './components/admin/Forgot password';
import PageAdmin1 from './components/page _admin/PageAdmin1';
import UserTable from './components/user/user';
import ArticleManager from './components/ajouter articl/ajouter articl';
import OrdersAdmin from './components/box/box';
import OrdersPage from './components/box/affichage'; // ✅

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/CalcDal" element={<CalcDal />} />
          <Route path="/Calcpout" element={<Calcpout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/PageAdmin1" element={<PageAdmin1 />} />
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/ArticleManager" element={<ArticleManager />} />
          
          {/* Liste des commandes pour admin */}
          <Route path="/OrdersAdmin" element={<OrdersAdmin />} />
          
          {/* Détail d'une commande spécifique */}
          <Route path="/OrdersPage/:id" element={<OrdersPage />} /> {/* ✅ Ici modifié pour prendre l'ID */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
