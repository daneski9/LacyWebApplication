import React from 'react';
import { Link } from 'react-router-dom'; 
import julioPic from "./images/julio/julio-pic.png";
import dianaPic from "./images/diana/diana-pic.jpg";
import gPic from "./images/g/g-pic.jpg";
import gabrielPic from "./images/gabriel/gabriel-pic.jpg";
import luisPic from "./images/luis/luis-pic.jpg";
import "./Lounge.css";

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
                <img src={require("./images/julio/works/julio-work5.jpg")} alt="julio-work5" />
                <img src={require("./images/julio/works/julio-work2.jpg")} alt="julio-work2" /> 
                <img src={require("./images/julio/works/julio-work3.jpg")} alt="julio-work3" /> 
              </div> 
              <div class = "diana-container">
                <a class = "socials" href = "https://www.instagram.com/la_dianuchis/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                    <p>View Diana's Profile</p>
                  </div>
                </a>
                <img src={dianaPic} alt="diana-pic"/>
                <img src={require("./images/diana/works/diana-work1.jpg")} alt="diana-work1" /> 
                <img src={require("./images/diana/works/diana-work2.jpg")} alt="diana-work2" /> 
                <img src={require("./images/diana/works/diana-work3.jpg")} alt="diana-work3" />  
              </div>
              <div class = "luis-container">
                <a class = "socials" href = "https://www.instagram.com/smileyartla/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View Luis' Profile</p>
                  </div>
                </a>
                <img src={luisPic} alt="luis-pic"/>
                <img src={require("./images/luis/works/luis-work1.jpg")} alt="luis-work1"/>
                <img src={require("./images/luis/works/luis-work2.jpg")} alt="luis-work2"/>
                <img src={require("./images/luis/works/luis-work3.jpg")} alt="luis-work3"/>
              </div>
              <div class = "g-container">
                <a class = "socials" href = "https://www.instagram.com/tattoovibesla/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View G's Profile</p>
                  </div>
                </a>
                <img src={gPic} alt="g-pic"/>
                <img src={require("./images/g/works/g-work1.jpg")} alt="g-work1" />
                <img src={require("./images/g/works/g-work2.jpg")} alt="g-work2" />
                <img src={require("./images/g/works/g-work3.jpg")} alt="g-work3" />
              </div>
              <div class = "gabriel-container">
                <a class = "socials" href = "https://www.instagram.com/q_tat2/?hl=en" target="_blank" rel ="noreferrer">
                  <div class = "img-overlay">
                   <p>View Gabriel's Profile</p>
                  </div>
                </a>
                <img src={gabrielPic} alt="gabriel-pic"/>
                <img src={require("./images/gabriel/works/gabriel-work1.jpg")} alt="gabriel-work1"/>
                <img src={require("./images/gabriel/works/gabriel-work2.jpg")} alt="gabriel-work2"/>
                <img src={require("./images/gabriel/works/gabriel-work3.jpg")} alt="gabriel-work3"/>
              </div>
          </div>
        </div>
    );
  }
  
  export default Lounge;