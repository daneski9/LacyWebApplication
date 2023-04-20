import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import julioPic from "../images/julio/j-tats.png";
import './julioCSS/AboutJulioJimenez.css';
import Footer from './Footer';
function About() {
    return (
      <>
      <Navbar />
      
      <div class = "top-container">
        <img src={julioPic} alt="j-tats" />
        <div class = "text-box">
          <div class = "text-content"> <p>While tattooing since 2016, Julio specializes in realism and black ink. He studies realistic art and photo realism. In his spare time, Julio draws
            and paints constantly, trying to develop skills and raise the bar!</p>
          </div>
        </div>
      </div>
      <div class = "hours-container">
        <div class = "hours-info">
          <h2>Hours</h2>
          <ul>
            <li>M&nbsp;&nbsp;10am - 9pm</li>
            <li>T&nbsp;&nbsp;&nbsp;10am - 9pm</li>
            <li>W 10am - 9pm</li>
            <li>F&nbsp;&nbsp;&nbsp;10am - 9pm</li>
            <li>Sa (Appointment Only)</li>
            <li>Su (Appointment Only)</li>
          </ul></div>
      </div>
      <div class = "bottom-container">
        <Link to="/JulioJimenez/inquiry">
        <button class ='about-btn'>BOOK NOW</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>

      
      </>
    );
  }
  
  export default About;