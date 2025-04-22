import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import Shop from './components/produit/shop';
import Contact from './components/contact/contact';
import Dashbord from './components/dashbord/dashbord';
import Services from './components/service/services';
import CalcDal from './components/CalcDal/SlabCalculator';
import Calcpout from './components/CalcPout/Calcpout';
import './App.css'

function App() {
  return (
    <Router>  
    <div className='App'>
    <Routes>
    

    <Route path="/" element={<Dashbord/>}/>
   <Route path='/Contact' element={<Contact/>}/> 
   <Route path='/Shop' element={<Shop/>}/>
   <Route path='/Services' element={<Services/>}/>
   <Route path='/CalcDal' element={<CalcDal/>}/>

   <Route path='/Calcpout' element={<Calcpout/>}/>

    </Routes>
    </div>
    </Router>

  ); 
}

export default App;
