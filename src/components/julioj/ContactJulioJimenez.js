import Navbar from "../Navbar";
import React, { useState } from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
//import './julioCSS/juliojimenez.css';
import Footer from './Footer';
//import '../../App.css'
import './julioCSS/ContactJulioJimenez.css'

function Contact() {

  const form = useRef()
    
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26d3yqg', 'template_gm183as', form.current, 'xcT2ZwmVbDNdY3rvM')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();

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
          <h1 class="contact_header">Contact</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
            risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
            nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
            lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
          </p> */}
          <form ref={form} onSubmit={sendEmail}>
          
            <input type="text" name="first" placeholder="First name" value={first} onChange={(event) => setFirst(event.target.value)} required />
            <input type="text" name="last" placeholder="Last name" value={last} onChange={(event) => setLast(event.target.value)} required />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <textarea id="message" name ="message" placeholder="Message" value={message} onChange={(event) => setDescription(event.target.value)} required />

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


  