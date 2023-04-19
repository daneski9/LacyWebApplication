import React from 'react';
import { Link } from 'react-router-dom'; 
import julioPic from "./images/julio/julio-pic.png";
import dianaPic from "./images/diana/diana-pic.jpg";
import gPic from "./images/g/g-pic.jpg";
import gabrielPic from "./images/gabriel/gabriel-pic.jpg";
import luisPic from "./images/luis/luis-pic.jpg";
import "./Lounge.css";
import FooterPortal from './FooterPortal';

function Lounge() {
    return (
        <div>
          <h1 className="title is-1">Lacy St. Art Lounge</h1>
          <h2 className="title-2">Meet The Artists</h2>
          <div class = "artists-container">
              <div class = "lacy-container">
              <Link to="/JulioJimenez/about" >
                <div class = "img-overlay">
                  <p>View Julio's Profile</p>
                </div>
              </Link>
                <img src={julioPic} alt="julio-pic" />
                <img src={require("./images/julio/julio-work1.jpg")} alt="julio-work1" /> 
                <img src={require("./images/julio/julio-work2.jpg")} alt="julio-work2" /> 
                <img src={require("./images/julio/julio-work3.jpg")} alt="julio-work4" /> 
              </div> 
              <div class = "diana-container">
                <a class = "socials" href = "https://www.instagram.com/la_dianuchis/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                    <p>View Diana's Profile</p>
                  </div>
                </a>
                <img src={dianaPic} alt="diana-pic"/>
                <img src={require("./images/diana/diana-work1.jpg")} alt="diana-work1" /> 
                <img src={require("./images/diana/diana-work2.jpg")} alt="diana-work2" /> 
                <img src={require("./images/diana/diana-work3.jpg")} alt="diana-work3" />  
              </div>
              <div class = "luis-container">
                <a class = "socials" href = "https://www.instagram.com/smileyartla/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View Luis' Profile</p>
                  </div>
                </a>
                <img src={luisPic} alt="luis-pic"/>
                <img src={require("./images/luis/luis-work1.jpg")} alt="luis-work1"/>
                <img src={require("./images/luis/luis-work2.jpg")} alt="luis-work2"/>
                <img src={require("./images/luis/luis-work3.jpg")} alt="luis-work3"/>
              </div>
              <div class = "g-container">
                <a class = "socials" href = "https://www.instagram.com/tattoovibesla/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View G's Profile</p>
                  </div>
                </a>
                <img src={gPic} alt="g-pic"/>
                <img src={require("./images/g/g-work1.jpg")} alt="g-work1" />
                <img src={require("./images/g/g-work2.jpg")} alt="g-work2" />
                <img src={require("./images/g/g-work3.jpg")} alt="g-work3" />
              </div>
              <div class = "gabriel-container">
                <a class = "socials" href = "https://www.instagram.com/q_tat2/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View Gabriel's Profile</p>
                  </div>
                </a>
                <img src={gabrielPic} alt="gabriel-pic"/>
                <img src={require("./images/gabriel/gabriel-work1.jpg")} alt="gabriel-work1"/>
                <img src={require("./images/gabriel/gabriel-work2.jpg")} alt="gabriel-work2"/>
                <img src={require("./images/gabriel/gabriel-work3.jpg")} alt="gabriel-work3"/>
              </div>
          </div>
          <Link to="/login">
            <button class = "lounge-button">Admin Login</button>
          </Link>
          <div>
            <FooterPortal />
          </div>
        </div>
    );
  }
  
  export default Lounge;