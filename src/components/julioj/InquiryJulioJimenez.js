import Navbar from "../Navbar";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../../App.css'
import './julioCSS/InquiryJulioJimenez.css'
import Footer from './Footer';
import { db } from "../../DataBase"; 
import {addDoc, collection} from "firebase/firestore";

function InquiryPage() {
  
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();
  
  const [first, setFName] = useState("");
  const [last, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageRef, setImageRef] = useState("");

  // Handle input changes
  const handleFName = (e) => setFName(e.target.value);
  const handleLName = (e) => setLName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageRef = (e) => setImageRef(e.target.value);

  const handleSubmit = async () => {
    // Save the data to Firebase
    await addDoc(collection(db, "Inquirer"), {First: first, Last: last,
      Email: email, Phone: phone, Location: location, Description: description, ImageRef: imageRef, State: 1})
    // Clear the form
    setFName("");
    setLName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setDescription("");
    setImageRef("");
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvpurwc', 'template_747huxp', form.current, 'y1XLxwxWca9cZzlcv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      window.scrollTo(0, 0);

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

        <input type="text" name="first" value={first} onChange={handleFName} placeholder="First name" required />
        <input type="text" name="last" value={last} onChange={handleLName} placeholder="Last name" required />
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="Email" required />
        <input type="tel" name="number" value={phone} onChange={handlePhone} placeholder="Phone"  required />
        <input type="text" name="location" value={location} onChange={handleLocation} placeholder="Location on the body" required />
        <textarea name="description" value={description} onChange={handleDescription} placeholder="Tattoo description" required />
        
        <label htmlFor="image">Reference Image
            <input type="file" accept=".pdf, .jpg, .png" name="image" value={imageRef} onChange={handleImageRef} />
        </label>
        
        <br></br>

        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>

    </div>
    
    <Footer />

    </>
  );
}

export default InquiryPage;