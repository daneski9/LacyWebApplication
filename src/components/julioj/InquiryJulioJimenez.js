import Navbar from "../Navbar";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../../App.css'
import './julioCSS/InquiryJulioJimenez.css'
import Footer from './Footer';

function InquiryPage() {

  // Database Stuff
  
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3croqwd', 'template_ocg7ucx', form.current, 'zCUN8bCaLrLkii0mR')
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
    <div className='inquiry'>
      
      {showAlert && (
        <div className="alert">
          Thank you for your inquiry!
        </div>
      )}

      <h1 className="inquiry_header">Submit an Inquiry</h1>
      <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="first" placeholder="First name" required />
        <input type="text" name="last" placeholder="Last name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="number" placeholder="Phone"  required />
        <input type="text" name="location" placeholder="Location on the body" required />
        <textarea name="description" placeholder="Tattoo description" required />
        
        <label htmlFor="image">Reference Image
            <input type="file" name="image" onChange={(event) => setImage(event.target.files[0])} required />
        </label>
        
        <br></br>

        <button type="submit">Submit</button>

      </form>

    </div>
    
    <Footer />
    </>
  );
}

export default InquiryPage;