import Navbar from "../Navbar";
import julioPic from "../images/julio/julio-pic.png";
import './julioCSS/AboutJulioJimenez.css'

function About() {
    return (
      <>
      <Navbar />
      
      <div class = "top-container">
      <img src={julioPic} alt="julio-pic" />
      <p>While tattooing since 2016, Julio specializes in realism and black ink. He studies realistic art and photo realism. In his spare time, Julio draws
        and paints constantly, trying to develop skills and raise the bar!</p>
      </div>
      <div class = "hours-container">
        <h2>Hours</h2>
        <ul>
          <li>M 10am - 9pm</li>
          <li>T  10am - 9pm</li>
          <li>W 10am - 9pm</li>
          <li>F  10am - 9pm</li>
          <li>Sa (Appointment Only)</li>
          <li>Su (Appointment Only)</li>
        </ul>
      </div>

      <div class="bottom-container">
        <a class = "socials" href = "https://instagram.com" target="_blank" rel ="noreferrer">Instagram</a>
      </div>
      
      </>
    );
  }
  
  export default About;