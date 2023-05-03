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
          <h1 className="title is-1">Contact Julio</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
            risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
            nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
            lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
          </p> */}
          <form onSubmit={handleSubmit}>
          
            <div>
              <label htmlFor="first">First Name:</label>
              <input type="text" id="first" value={first} onChange={(event) => setFirst(event.target.value)} required />
            </div>

            <div>
              <label htmlFor="last">Last Name:</label>
              <input type="text" id="last" value={last} onChange={(event) => setLast(event.target.value)} required />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(event) => setDescription(event.target.value)} required />
            </div>

            
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


  