import React from 'react';
import { Link } from 'react-router-dom'; 

function Lounge() {
    return (
        <div>
          <h1 className="title is-1">Lacy St. Art Lounge</h1>
          <div class = "artists-container">
              <div class = "lacy-container">
                <Link to="/JulioJimenez" > "Lacy picture here" </Link> 
              </div>
              <div class = "next-artist-container">
                <p>next artist here</p>
              </div>
          </div>
          <Link to="/login">
            <button>Hidden login</button>
          </Link>
        </div>
    );
  }
  
  export default Lounge;