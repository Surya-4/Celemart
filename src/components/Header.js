import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/C" style={{color:'red', fontSize:'28px'}}><b>CeleMart</b></Link>
      <nav>
      <Link to="/cart">Cart</Link>
      <Link to="/">Login</Link>
      <Link to="/">Register</Link>
      </nav>
    </div>
  )
}

export default Header;