import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='NavBar'>
      <div className="NavLogo">Textiles</div>
      <div className="NavOptions">
        <div>Home</div>
        <div>About Us</div>
        <div>Products</div>
        <div>Shop</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Header