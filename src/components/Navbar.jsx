import React from 'react';
import logo from '../assets/icon.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/"><img src={logo} alt="" height={"50px"} width={"50px"} />
        </Link>
      </div>
        <Link to="/"><p style={{color:"#fff"}} className=' playfair-display-head fashion'>Fashion Store</p></Link>
      <div className="search-bar">
        <input type="text" name="" id="" placeholder='Search...' />
      </div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category">Category</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
      </ul>
  </nav>
  );
};

export default Navbar;
