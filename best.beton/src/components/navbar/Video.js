import React from 'react'
import videobb from '../navbar/videobb.mp4'
import './navbar.css';

export default function Video() {
  return (
    <div className="main">  
    
    < video src={videobb} autoPlay loop muted />

</div>
  )
}
