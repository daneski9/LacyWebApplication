// FooterPortal

import React from 'react';
import "./FooterPortal.css";
import Map from "./Map"
import { useJsApiLoader } from '@react-google-maps/api';

function FooterPortal() {
  const { isLoaded } = useJsApiLoader ({
    id: "AIzaSyC1owAfcnJlrQ19E-boHV8V5LYgtu7MNA8",
    googleMapsApiKey: "AIzaSyC1owAfcnJlrQ19E-boHV8V5LYgtu7MNA8",
  });
  return (
    <>
      <div className="footer-container-">
        <div className="footer-left-">
          <h3>Lacy St. Art Lounge</h3>
          <p>2684 Lacy St.</p>
          <p>Los Angeles, CA 90031</p>
          <p>Phone: (562) 201-7139</p>
          <p>Email: lacystartlounge<br></br>@gmail.com</p>
        </div>
        <div className="footer-middle-">
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
          <Map isLoaded={isLoaded}/>
        </div>
      </div>
      <div className="footer-bottom-">
        <p>Copyright © 2023 Lacy St. Art Lounge.
          All rights reserved.</p>
      </div>
      </>
  );
}

export default FooterPortal;
