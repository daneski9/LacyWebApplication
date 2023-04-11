import Navbar from "../Navbar";
import ServiceBanner from "../subcomponents/ServiceBanner";
import './julioCSS/ServicesJulioJimenez.css';

const fakeData = {
    image: 'https://images.unsplash.com/photo-1588417490421-63d4e4175f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    session: 'Full Day Session',
    price: 1200,
    deposit: 200,
    time: 480,
    description: 'Book this session if interested in starting a full back, chest or sleeve'
}

const dataArray = new Array(20).fill(fakeData);
console.log(dataArray);

function Services() {
    return (
      <>
      <Navbar />
      <div className="bannerGrid">
        {dataArray.map((banner) => (
          <ServiceBanner data={banner}/>
        ))}
      </div>
      </>
    );
  }
  
  export default Services;