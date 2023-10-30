import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import "./Navbar.css";
import InstagramIcon from "./images/instagram_logo.png";

import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Navbar(props){
    const location = useLocation();
    const currentPath = location.pathname;
    let aboutUrl, servicesUrl, portfolioUrl, contactUrl, paymentUrl,instagramUrl, dashboardUrl = '';

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    // Only show the dashboard link if the user is logged in
    const auth = getAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        
        return () => {
            unsubscribe();
        };
    }, [auth]);
    

    if (currentPath.startsWith('/JulioJimenez')) {
        aboutUrl = '/JulioJimenez/about';
        servicesUrl = '/JulioJimenez/services';
        portfolioUrl = '/JulioJimenez/portfolio';
        contactUrl = '/JulioJimenez/contact';
        paymentUrl = '/JulioJimenez/payment'
        instagramUrl ='https://www.instagram.com/jayytatts/?hl=en'
        dashboardUrl = '/JulioJimenez/dashboard';
    }
    
    // Only show the dashboard link if the user is logged in
    const dashboardLink = user ? (
        <li>
            <Link to={dashboardUrl} onClick={handleLinkClick}>Dashboard</Link>
        </li>
    ) : null;



    //To add another artist:
    /*else if (currentPath.startsWith('OtherArtist')){
        aboutUrl = '';
        servicesUrl = '';
        portfolioUrl = '';
        contactUrl = '';
    } */
    return (
        <>
        <div className="ham-background">
        <label className="hamburger-menu">
            <input type="checkbox"></input>
        </label>
        <aside className="sidebar">
            <nav>
            <ul>
                <li>
                <Link to={aboutUrl} onClick={handleLinkClick}>About</Link>
                </li>
                <li>
                <Link to={servicesUrl} onClick={handleLinkClick}>Services</Link>
                </li>
                <li>
                <Link to={portfolioUrl} onClick={handleLinkClick}>Portfolio</Link>
                </li>
                <li>
                <Link to={contactUrl} onClick={handleLinkClick}>Contact</Link>
                </li>
                <li>
                <Link to={paymentUrl} onClick={handleLinkClick}>Payment Options</Link>
                </li>
                <li>
                <Link to="/" onClick={handleLinkClick}>Lounge</Link>
                </li>
                
                {dashboardLink}
                    
                <li>
                <Link to={instagramUrl} onClick={handleLinkClick} target="_blank">
        <img src={InstagramIcon} alt="instagramIcon" width="20" height="20"/> </Link>
                </li>
            </ul>
            </nav>
        </aside>
        </div>
        <nav className="navbar">
            
            <ul>
                <li>
                <Link to={aboutUrl} onClick={handleLinkClick}>About</Link>
                </li>
                <li>
                <Link to={servicesUrl} onClick={handleLinkClick}>Services</Link>
                </li>
                <li>
                <Link to={portfolioUrl} onClick={handleLinkClick}>Portfolio</Link>
                </li>
                <li>
                <Link to={contactUrl} onClick={handleLinkClick}>Contact</Link>
                </li>
                <li>
                <Link to={paymentUrl} onClick={handleLinkClick}>Payment Options</Link>
                </li>
                <li>
                <Link to="/" onClick={handleLinkClick}>Lounge</Link>
                </li>
                {dashboardLink}
                <li>
                <Link to={instagramUrl} onClick={handleLinkClick} target="_blank">
        <img src={InstagramIcon} className="instagram" alt="instagramIcon" width="20" height="20"/> </Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navbar;