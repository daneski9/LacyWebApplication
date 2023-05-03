import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar(){
    const location = useLocation();
    const currentPath = location.pathname;
    let aboutUrl, servicesUrl, portfolioUrl, contactUrl = '';

    if (currentPath.startsWith('/JulioJimenez')) {
        aboutUrl = '/JulioJimenez/about';
        servicesUrl = '/JulioJimenez/services';
        portfolioUrl = '/JulioJimenez/portfolio';
        contactUrl = '/JulioJimenez/contact';
    }
    //To add another artist:
    /*else if (currentPath.startsWith('OtherArtist')){
        aboutUrl = '';
        servicesUrl = '';
        portfolioUrl = '';
        contactUrl = '';
    } */
    return (
        <nav className="navbar">
          <ul>
          <li>
             <Link to={aboutUrl}>About</Link>
            </li>
            <li>
             <Link to={servicesUrl}>Services</Link>
            </li>
            <li>
             <Link to={portfolioUrl}>Portfolio</Link>
            </li>
            <li>
             <Link to={contactUrl}>Contact</Link>
            </li>
            <li>
             <Link to="/">Lounge</Link>
            </li>
           </ul>
        </nav>
    );
}
export default Navbar;