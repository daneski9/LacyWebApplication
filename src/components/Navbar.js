import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./Navbar.css";

function Navbar(props){
    const location = useLocation();
    const currentPath = location.pathname;
    let aboutUrl, servicesUrl, portfolioUrl, contactUrl, paymentUrl = '';

    if (currentPath.startsWith('/JulioJimenez')) {
        aboutUrl = '/JulioJimenez/about';
        servicesUrl = '/JulioJimenez/services';
        portfolioUrl = '/JulioJimenez/portfolio';
        contactUrl = '/JulioJimenez/contact';
        paymentUrl = '/JulioJimenez/payment'
    }
    //To add another artist:
    /*else if (currentPath.startsWith('OtherArtist')){
        aboutUrl = '';
        servicesUrl = '';
        portfolioUrl = '';
        contactUrl = '';
    } */
    return (
        <>
        <div class="ham-background">
        <label class="hamburger-menu">
            <input type="checkbox"></input>
        </label>
        <aside class="sidebar">
            <nav>
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
                <Link to={paymentUrl}>Payment Options</Link>
                </li>
                <li>
                <Link to="/">Lounge</Link>
                </li>
            </ul>
            </nav>
        </aside>
        </div>
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
                <Link to={paymentUrl}>Payment Options</Link>
                </li>
                <li>
                <Link to="/">Lounge</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;