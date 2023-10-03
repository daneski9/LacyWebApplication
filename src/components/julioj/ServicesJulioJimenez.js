import Navbar from "../Navbar";
//import ServiceBanner from "../subcomponents/ServiceBanner";
import './julioCSS/ServicesJulioJimenez.css';
import './julioCSS/InquiryJulioJimenez.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import servicePic1 from "../images/services/full-lower-arm.png";
import servicePic2 from "../images/services/full-back.png";
import servicePic3 from "../images/services/full-sleeve.png";
import servicePic4 from "../images/services/portrait-arm.png";
import servicePic5 from "../images/services/portrait-bicep.png";
import servicePic6 from "../images/services/upper-arm.png";
import servicePic7 from "../images/services/upper-arm-full.png";
//import servicePic8 from "../images/services/img8.png";


function Services() {

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    <Navbar/>
    <div className = "headerContainer">
      <div className="spacer"></div>
      <h1 className="servicesTitle">Services</h1>
      <p className = "discountText"> Got referrals? Get a discount. Take $150 off your next tattoo!</p>
    </div>
    <div className="page-container">
       <div className = "services-container">
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic2} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Full Day Session</p>
                    <p className = "itemDescription">Ideal for extensive designs, covering the entire back, chest, or sleeve, bringing your bold ideas to life.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic2} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Half Day Session</p>
                    <p className = "itemDescription">Suited for shorter appointments, typically lasting around 3-4 hours, offering a professional touch in less time.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Filler Tattoo</p>
                    <p className = "itemDescription">Ideal for those looking to add some extra flair or fill empty spaces with smaller, detailed designs.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Small Tattoo</p>
                    <p className = "itemDescription">Perfect for a subtle statement, these tattoos are small but impactful.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic3} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Upper Arm Session</p>
                    <p className = "itemDescription">Ideal for elaborate or larger designs specifically crafted for the upper arm area.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic4} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Full Lower Arm Session</p>
                    <p className = "itemDescription">Suited for those desiring comprehensive artwork on the inner or outer lower arm, from wrist to elbow.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic5}  alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Inner Bicep Session</p>
                    <p className = "itemDescription">Perfect for those seeking detailed designs in the more discreet inner bicep area.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic6}alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Full Lower Leg Session</p>
                    <p className = "itemDescription">Ideal for those aiming to cover the lower leg with detailed, extensive designs, from the ankle to the knee.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Chest Tattoo</p>
                    <p className = "itemDescription">Great for bold, expansive designs aimed at transforming the chest area with intricate ink work.</p>
                  </div>
              </div>
              </Link>
              <Link to="/JulioJimenez/inquiry" onClick={handleLinkClick}>
              <div className = "services-item">
                  <img className = "itemImg" src={servicePic7} alt="text"></img>
                  <div className = "itemText">
                    <p className = "itemTitle">Spine Tattoo</p>
                    <p className = "itemDescription">Perfect for those looking to adorn their spine with elegant, linear designs that follow the body's curvature.</p>
                  </div>
              </div>
              </Link>
              
              {/* <Link to="/JulioJimenez/inquiry">
                  <div className = "services-item">
                    <img className = "itemImg" src={servicePic7} alt="text"></img>
                    <div className = "itemText">
                      <p class = "itemTitle">Full day session</p>
                      <p>Book this session if interested in starting a full back, chest or sleeve</p>
                    </div>
                  </div>
                </Link> */}
        </div>
    </div>
      <Footer className="footer"/>
    </>
  );
}
  export default Services;