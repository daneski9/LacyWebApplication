import Navbar from "../Navbar";
import React, { useState } from 'react';
//import './julioCSS/juliojimenez.css';
import Footer from './Footer';
//import '../../App.css'
import './julioCSS/ContactJulioJimenez.css'

function Contact() {
    
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

     // Clear all fields
     setFirst('');
     setLast('');
     setEmail('');
     setDescription('');
     
 
     // Show alert
     setShowAlert(true);
 
     // Hide alert after 15 seconds
     setTimeout(() => {
       setShowAlert(false);
     }, 15000);

    
    
  };
  
  
  
  
  
  return (
      <>
      <Navbar />
      <div className='contact'>

      {showAlert && (
        <div className="alert">
          Thank you for your message! A reply will be sent shortly.
        </div>
      )}
        <div>
          <h1 class="contact_header">Contact Us</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
            risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
            nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
            lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
          </p> */}
          <form onSubmit={handleSubmit}>
          
            <input type="text" id="first" placeholder="First name" value={first} onChange={(event) => setFirst(event.target.value)} required />
            <input type="text" id="last" placeholder="Last name" value={last} onChange={(event) => setLast(event.target.value)} required />
            <input type="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <textarea id="message" placeholder="Message" value={message} onChange={(event) => setDescription(event.target.value)} required />

            <div className='submit-button'>
              <button type="submit">Submit</button>
            </div>
            
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      </>
    );
  }
  
  export default Contact;


  