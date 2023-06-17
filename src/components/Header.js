import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/Celemart" style={{color:'red', fontSize:'28px'}}><b>CeleMart</b></Link>
      <nav>
      <Link to="/cart">Cart</Link>
      <Link to="/Celemart">Login</Link>
      <Link to="/Celemart">Register</Link>
      </nav>
    </div>
  )
}

export default Header;