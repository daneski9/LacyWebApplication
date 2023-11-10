import React from 'react';
import "./julioCSS/Footer.css";
import { useJsApiLoader } from '@react-google-maps/api';
import Map from "../Map";

function Footer(props) {

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  // const { isLoaded } = useJsApiLoader ({
  //   id: "AIzaSyBwZIHTwjOEb62DXwjnuKziwBwWvK7AM3U",
  //   googleMapsApiKey: "AIzaSyBwZIHTwjOEb62DXwjnuKziwBwWvK7AM3U",
  // });

  return (
    
    

    <footer className={props.className}>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Lacy St. Art Lounge</h3>
          <p>2684 Lacy St.</p>
          <p>Los Angeles, CA 90031</p>
          <p>Phone: (562) 201-7139</p>
          <p>Email: Email to be added</p>
        </div>
        <div className="footer-middle">
          <h3>Navigation</h3>
          <ul>
          <li><a href= "/JulioJimenez/about" onClick={handleLinkClick}> About </a></li> 
          <li><a href= "/JulioJimenez/services" onClick={handleLinkClick}> Services </a></li>
          <li><a href= "/JulioJimenez/portfolio" onClick={handleLinkClick}> Portfolio </a></li>
          <li><a href= "/JulioJimenez/contact" onClick={handleLinkClick}> Contact </a></li>
          <li><a href= "/" onClick={handleLinkClick}> Lounge </a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Where We Are</h3>
          <Map/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 Lacy St. Art Lounge.
          All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
