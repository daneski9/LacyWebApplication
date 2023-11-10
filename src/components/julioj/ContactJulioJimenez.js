import Navbar from "../Navbar";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';


//import './julioCSS/juliojimenez.css';
import Footer from './Footer';
import '../../App.css'
import './julioCSS/ContactJulioJimenez.css'

function Contact() {

  const form = useRef()
    
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [capVal, setCapVal] = useState("true");
  const captchaRef = useRef();
  const updateCaptcha = (e) => {
     // Log the changes
     console.log("Captcha Completed");

     // Capture the value of the captch
     const captchaValue = captchaRef.current.getValue();
 
     // Check to see if the captcha was valid
     if (captchaValue != "") {
       // Change the captcha value to false (for the disabled attrivute)
       setCapVal("");
     } else {
       // Otherwise the captcha hasn't passed so we set it back to true
       setCapVal("true");
     }
  }


  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Scroll to the top of the page immediately after hitting submit
    window.scrollTo(0, 0);
    setIsLoading(true);  // Start loading
  
    try {
      const result = await emailjs.sendForm('service_wvpurwc', 'template_me89qhj', form.current, 'y1XLxwxWca9cZzlcv');
      console.log(result.text);
  
      // Clear all fields
      setFirst('');
      setLast('');
      setEmail('');
      setDescription('');
      setCapVal('true');
  
      // Reset the ReCAPTCHA
      captchaRef.current.reset();
  
      // Show alert
      setShowAlert(true);
  
      // Hide alert after 15 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 15000);
    } catch (error) {
      console.log(error.text);
    } finally {
      setIsLoading(false);  
    }
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
        
      <h1 className="contact_header">Contact</h1>
      
      <form ref={form} onSubmit={sendEmail} className="contact_form">
        <p className="messageText">Any questions or concerns? Contact Us!</p>

        <input type="text" name="first" placeholder="First name" value={first} onChange={(event) => setFirst(event.target.value)} required />
        <input type="text" name="last" placeholder="Last name" value={last} onChange={(event) => setLast(event.target.value)} required />
        <input type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <textarea id="message" name ="message" placeholder="Message" value={message} onChange={(event) => setDescription(event.target.value)} required />

        <ReCAPTCHA 
          sitekey='6LdVvagoAAAAALOqtiBfkZY7sIYlse5jpbJ-tuo6'
          onChange={updateCaptcha}
          theme="dark"
          ref={captchaRef}
          className="recaptcha"
        />

        <br></br>
        {
          isLoading && (
            <div className="loader-container">
              <div className="loader"></div> {}
            </div>
          )
        }
        
        <button type="submit" disabled={isLoading || capVal}>Submit</button>
        
              
      </form>

      <br /><br /><br /><br /><br /><br /><br />
      <h1 className="appointment">Looking to Schedule an Appointment?</h1>
      <Link to="/JulioJimenez/inquiry">
        <button className='about-btn' onClick={() => {
          window.scroll({
            top: 0,
            left: 0
          });
        }}>BOOK NOW</button>
      </Link>

    </div>

    <Footer />

    </>
  );
}
  
export default Contact;