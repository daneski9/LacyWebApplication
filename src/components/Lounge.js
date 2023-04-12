import React from 'react';
import { Link } from 'react-router-dom'; 
import julioPic from "./images/julio/julio-pic.png";
import julioWork1 from "./images/julio/julio-work1.png"
import julioWork2 from "./images/julio/julio-work2.png"
import julioWork4 from "./images/julio/julio-work4.png"
import dianaPic from "./images/diana-pic.png";
import gPic from "./images/g-pic.png";
import gabrielPic from "./images/gabriel-pic.png";
import luisPic from "./images/luis-pic.png";

function Lounge() {
    return (
        <div>
          <h1 className="title is-1">Lacy St. Art Lounge</h1>
          <div class = "artists-container">
              <div class = "lacy-container">
                <Link to="/JulioJimenez/about" > 
                  <img src={julioPic} alt="julio-pic" /> 
                </Link> 
                <img src={julioWork1} alt="julio-work1" /> 
                <img src={julioWork2} alt="julio-work2" /> 
                <img src={julioWork4} alt="julio-work4" /> 
              </div> 
              <div class = "diana-container">
                <a class = "socials" href = "https://www.instagram.com/la_dianuchis/?hl=en" target="_blank" rel ="noreferrer">
                  <img src={dianaPic} alt="diana-pic"/>
                </a>
              </div>
              <div class = "g-container">
                <a class = "socials" href = "https://www.instagram.com/tattoovibesla/?hl=en" target="_blank" rel ="noreferrer">
                  <img src={gPic} alt="g-pic"/>
                </a>
              </div>
              <div class = "gabriel-container">
                <a class = "socials" href = "https://www.instagram.com/q_tat2/?hl=en" target="_blank" rel ="noreferrer">
                  <img src={gabrielPic} alt="gabriel-pic"/>
                </a>
              </div>
              <div class = "luis-container">
                <a class = "socials" href = "https://www.instagram.com/smileyartla/?hl=en" target="_blank" rel ="noreferrer">
                  <img src={luisPic} alt="luis-pic"/>
                </a>
              </div>
          </div>
          <Link to="/login">
            <button>Employee Login</button>
          </Link>
        </div>
    );
  }
  
  export default Lounge;