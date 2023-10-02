import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import julioPic from "../images/julio/j-tats.png";
import './julioCSS/AboutJulioJimenez.css';
import Footer from './Footer';

function About() {
    return (
      <>
      <Navbar />
      
      <div className = "top-container">
        <div className = "img-container"><img src={julioPic} alt="j-tats" /></div>
        <div className = "text-box">
          <div className = "text-content"> <p>While tattooing since 2016, Julio specializes in realism and black ink. He studies realistic art and photo realism. In his spare time, Julio draws
            and paints constantly, trying to develop skills and raise the bar!</p>
          </div>
        </div>
      </div>
      <div className = "bottom-container">
        <div className = "hours-info">
          <h2>Hours</h2>
          <ul>
            <li>M&nbsp;&nbsp;10am - 9pm</li>
            <li>T&nbsp;&nbsp;&nbsp;10am - 9pm</li>
            <li>W 10am - 9pm</li>
            <li>F&nbsp;&nbsp;&nbsp;10am - 9pm</li>
            <li>Sa (Appointment Only)</li>
            <li>Su (Appointment Only)</li>
          </ul></div>
          <Link to="/JulioJimenez/inquiry">
            <button className='about-btn' onClick={() => {
              window.scroll({
                top: 0,
                left: 0
              });
            }}>BOOK NOW</button>
          </Link>
      </div>
      <div>

        <Footer />
      </div>

      <div className = "login">
        <Link to = "/JulioJimenez/login">
            <button className = "lounge-button" onClick={() => {
              window.scroll({
                top: 0,
                left: 0
              });
            }}>Admin Login</button>
        </Link>
      </div>
    
      </>
    );
  }
  
  export default About;