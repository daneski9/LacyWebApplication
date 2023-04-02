import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar(){
    return (
        <nav className="navbar">
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/about">About</Link>
            </li>
            <li>
             <Link to="/services">Services</Link>
            </li>
            <li>
             <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
             <Link to="/inquiry">Inquiry</Link>
            </li>
            <li>
             <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
           </ul>
        </nav>
    );
}

export default Navbar;