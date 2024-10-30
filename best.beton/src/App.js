import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import Shop from './components/produit/shop';
import Contact from './components/contact/contact';
import Dashbord from './components/dashbord/dashbord';


function App() {
  return (
    <Router>  
    <div className='App'>
    <Routes>
    

    <Route path="/" element={<Dashbord/>}/>
   <Route path='/Contact' element={<Contact/>}/> 
   <Route path='/Shop' element={<Shop/>}/>

    </Routes>
    </div>
    </Router>

  ); 
}

export default App;
