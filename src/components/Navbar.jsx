import React from 'react';
import logo from '../assets/icon.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
          <span className="text-3xl font-bold tracking-wide">Fashion Store</span>
        </div>

        <div>
          <input type="text" name="" placeholder= "Search" id="" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <Link to="/"><li className="hover:text-gray-300 cursor-pointer">Home</li></Link>
          <li className="hover:text-gray-300 cursor-pointer">Category</li>
          <li className="hover:text-gray-300 cursor-pointer">Cart</li>
          <li className="hover:text-gray-300 cursor-pointer">Login/Register</li>
        </ul>


        {/* Hamburger Menu (for smaller screens) */}
        <div className="md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
