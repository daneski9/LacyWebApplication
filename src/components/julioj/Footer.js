import React from 'react';
import "./julioCSS/Footer.css";

function Footer(props) {
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
          <li><a href= "/JulioJimenez/about"> About </a></li> 
          <li><a href= "/JulioJimenez/services"> Services </a></li>
          <li><a href= "/JulioJimenez/portfolio"> Portfolio </a></li>
          <li><a href= "/JulioJimenez/contact"> Contact </a></li>
          <li><a href= "/"> Lounge </a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Where We Are</h3>
          <div>
          <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.458103093944!2d-118.22081752365085!3d34.083403116083176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75bb49ff2b7%3A0x198631892d3409d2!2s2684%20Lacy%20St%2C%20Los%20Angeles%2C%20CA%2090031!5e0!3m2!1sen!2sus!4v1694672824199!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
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
