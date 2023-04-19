// FooterPortal

import React from 'react';
import "./FooterPortal.css";

function FooterPortal() {
  return (
    <footerportal>
      <div className="footer-container">
        <div className="footer-left">
          <h3>Lacy St. Art Lounge</h3>
          <p>2684 Lacy St.</p>
          <p>Los Angeles, CA 90031</p>
          <p>Phone: (562) 201-7139</p>
          <p>Email: lacystartlounge@gmail.com</p>
        </div>
        <div className="footer-middle">
          <h3>Find Us</h3>
          <ul>
          <li><a href="/JulioJimenez/about">Julio Jimenez (JayTatts) </a></li> 
          <li><a href= "https://www.instagram.com/la_dianuchis/?hl=en" >Diana</a></li>
          <li><a href= "https://www.instagram.com/tattoovibesla/?hl=en" >G Galvez</a></li>
          <li><a href= "https://www.instagram.com/tattoovibesla/?hl=en">Gabriel</a></li>
          <li><a href="https://www.instagram.com/smileyartla/?hl=en">Luis</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Where We Are</h3>
          <ul>
            {/* TODO: add link */}
            <li><a>Insert</a></li>
            <li><a>Google</a></li>
            <li><a>Maps</a></li>
            <li><a>Location</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 Lacy St. Art Lounge.
          All rights reserved.</p>
      </div>
    </footerportal>
  );
}

export default FooterPortal;
