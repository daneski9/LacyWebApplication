// FooterPortal

import React from 'react';
//import "./FooterPortal.css";

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
          <h3>Find Us on IG</h3>
          <ul>
          <li><a href="https://www.instagram.com/jayytatts/?hl=en">Julio Jimenez</a></li> 
          <li><a href= "https://www.instagram.com/la_dianuchis/?hl=en">Diana</a></li>
          <li><a href= "https://www.instagram.com/tattoovibesla/?hl=en">G Galvez</a></li>
          <li><a href= "https://www.instagram.com/tattoovibesla/?hl=en">Gabriel</a></li>
          <li><a href="https://www.instagram.com/smileyartla/?hl=en">Luis</a></li>
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
    </footerportal>
  );
}

export default FooterPortal;
