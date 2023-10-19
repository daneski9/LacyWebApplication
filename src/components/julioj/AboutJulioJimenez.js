import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import julioPic from "../images/julio/j-tats.png";
import './julioCSS/AboutJulioJimenez.css';
import Footer from './Footer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function About() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const adminButtonNavigate= useNavigate();

  useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, user => {
          if (user) {
              // User is logged in
              setIsLoggedIn(true);
          } else {
              // User is not logged in
              setIsLoggedIn(false);
          }
      });

      // Cleanup the listener on component unmount
      return () => unsubscribe();
  }, []);

  const handleAdminLoginClick = () => {
      if (isLoggedIn) {
          window.scrollTo(0, 0);
          adminButtonNavigate('/JulioJimenez/dashboard');
      } else {
          window.scrollTo(0, 0);
          adminButtonNavigate('/JulioJimenez/login');
      }
  };

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
        <div className = "info">
          <h2>Hours</h2>
          <p className="appointment">Monday - Sunday<br></br>(Appointment Only)</p>
        
          <Link to="/JulioJimenez/inquiry">
            <button className='about-btn' onClick={() => {
              window.scroll({
                top: 0,
                left: 0
              });
            }}>BOOK NOW</button>
          </Link>
          

          <h2>Contact the Tattoo Artist</h2>
          <Link to="/JulioJimenez/contact">
            <button className='about-btn' onClick={() => {
              window.scroll({
                top: 0,
                left: 0
              });
            }}>CONTACT US</button>
          </Link>
        
        </div>
      </div>
      
      <Footer />

      <div className = "login">
        <button className="lounge-button" onClick={handleAdminLoginClick}>Admin Login</button>
      </div>
    
      </>
    );
  }
  
  export default About;