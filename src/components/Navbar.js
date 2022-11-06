import React from 'react'
import './Navbar.css'
import Modest from '../assets/modest.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <img src={Modest} alt='Logo'/>
      </div>
      <div>
        <button className='nav-btn'>home</button>
        <button className='nav-btn'>about</button>
        <button className='nav-btn'>team</button>
        <button className='nav-btn'>work</button>
        <button className='nav-btn'>feature</button>
        <button className='nav-btn'>contact</button>
      </div>
    </nav>
  )
}
export default Navbar
