import Navbar from "../Navbar";
//import ServiceBanner from "../subcomponents/ServiceBanner";
import './julioCSS/ServicesJulioJimenez.css';
import './julioCSS/InquiryJulioJimenez.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import servicePic1 from "../images/services/img1.jpg";
import servicePic2 from "../images/services/img2.jpg";
import servicePic3 from "../images/services/img3.jpg";
import servicePic4 from "../images/services/img4.jpg";
import servicePic5 from "../images/services/img5.jpg";
import servicePic6 from "../images/services/img6.jpg";
import servicePic7 from "../images/services/img7.jpg";
import servicePic8 from "../images/services/img8.png";


function Services() {
  return (
    <>
      <Navbar />
    
    <h1 className="servicesTitle">Services</h1>
    <div className="page-container">
       <div className = "services-container">
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic1} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic2} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic3} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic4} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic5}  alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic6}alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic8} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry">
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p class = "itemTitle">Full day session</p>
                    <p>Book this session if interested in starting a full back, chest or sleeve</p>
                  </div>
              </div>
              </Link>
        </div>
    </div>
      <Footer className="footer"/>
    </>
  );
}
  export default Services;