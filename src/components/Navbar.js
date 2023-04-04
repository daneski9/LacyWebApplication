import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar(){
    return (
        <nav className="navbar">
          <ul>
          <li>
             <Link to="/About">About</Link>
            </li>
            <li>
             <Link to="/services">Services</Link>
            </li>
            <li>
             <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
             <Link to="/contact">Contact</Link>
            </li>
            <li>
             <Link to="/">Lounge</Link>
            </li>
           </ul>
        </nav>
    );
}

export default Navbar;