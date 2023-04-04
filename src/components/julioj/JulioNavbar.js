import React from 'react';
import { Link } from 'react-router-dom'; 
import "../Navbar.css";

function julioNavbar(){
    return (
        <nav className="navbar">
          <ul>
          <li>
             <Link to="/AboutJulioJimenez">About</Link>
            </li>
            <li>
             <Link to="/ServicesJulioJimenez">Services</Link>
            </li>
            <li>
             <Link to="/PortfolioJulioJimenez">Portfolio</Link>
            </li>
            <li>
             <Link to="/ContactJulioJimenez">Contact</Link>
            </li>
            <li>
             <Link to="/">Lounge</Link>
            </li>
           </ul>
        </nav>
    );
}

export default julioNavbar;