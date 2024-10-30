import React from 'react'
import Navbar from '../navbar/navbar'
import Video from '../navbar/Video'
import Footer from '../footer/footer'
import ProductGrid from '../produit/ProductGrid'
import './dashbord.css'

export default function Dashbord() {
  return (
    <div>
        <div className='Dash-Nav'>
            <Navbar/>
        </div>
        <div className='Main-Dash'>
            <Video/>
            <ProductGrid/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
