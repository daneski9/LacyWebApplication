import Navbar from "../Navbar";
import ServiceBanner from "../subcomponents/ServiceBanner";
import './julioCSS/ServicesJulioJimenez.css';
import Footer from './Footer';
import servicePic1 from "../images/services/full_body.jpeg";
import servicePic2 from "../images/services/half_day.webp";
import servicePic3 from "../images/services/upper_arm.jpeg";
import servicePic4 from "../images/services/lower_arm.jpeg";
import servicePic5 from "../images/services/bicep_tattoo.jpeg";
import servicePic6 from "../images/services/lower_leg.jpeg";
import servicePic7 from "../images/services/chest.jpeg";
import servicePic8 from "../images/services/spine.webp";

const leftArray = [
  {
    image: servicePic1,
    session: 'Full Day Session',
    price: 1600,
    deposit: 200,
    time: 480,
    description: 'Book this session if interested in starting a full back, chest or sleeve'
  },
  {
  image: servicePic3,
  session: 'Upper Arm Session',
  price: 2400,
  deposit: 200,
  time: 480,
  description: 'Upper Arm Tattoo may exceed 8hrs or require 2 Sessions'
  },
  {
    image: servicePic5,
    session: 'Inner Bicep Session',
    price: 1200,
    deposit: 200,
    time: 420,
    description: 'Full Inner biceps tattoo between the elbow and the armpit'
  }, 
  {
    image: servicePic7,
    session: 'Chest Tattoo',
    price: 1400,
    deposit: 200,
    time: 480,
    description: 'Single side chest tattoo that covers whole chest from. Takes Full day'
  }
]


const rightArray = [
{
  image: servicePic2,
  session: 'Half day Session',
  price: 1200,
  deposit: 200,
  time: 480,
  description: 'Typically Involves a 3-4 hour appointment with a professional tattoo artist'
},
{
  image: servicePic4,
  session: 'Full Lower Arm',
  price: 1200,
  deposit: 200,
  time: 420,
  description: 'Full Inner Forearm Tattoo Wrist to Ditch Or Full Outer Arm Tattoo Wrist to Elbow'
},
{
  image: servicePic6,
  session: 'Full Lower Leg',
  price: 1600,
  deposit: 200,
  time: 480,
  description: 'Full Lower Leg Tatttoo inner ankle to knee or outer ankle to knee'
},
{
  image: servicePic8,
  session: 'Spine Tattoo',
  price: 700,
  deposit: 200,
  time: 360,
  description: 'Book this session if interested in starting a full back, chest or sleeve'
}
]

function Services() {
  return (
    <>
    <Navbar />
    <ul class = "servicesList">
      <li>
        {leftArray.map((banner) => (
          <div className="leftSide">
            <ServiceBanner data={banner}/>
          </div>
        ))}
      </li>
      <li>
        {rightArray.map((banner) => (
          <div className="rightSide">
            <ServiceBanner data={banner}/>
          </div>
        ))}
      </li>
    </ul>
    <div>
      <Footer />
    </div>
    </>
  );
}
  export default Services;