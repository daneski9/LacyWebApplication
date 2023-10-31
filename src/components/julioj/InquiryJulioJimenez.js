import '../../App.css'
import './julioCSS/InquiryJulioJimenez.css'
import Footer from './Footer';
import { db } from "../../DataBase"; 
import {addDoc, collection, serverTimestamp, getDocs, query} from "firebase/firestore";
import { storage } from "../../DataBase";

import Navbar from "../Navbar";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';


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
  const [link, setLink] = useState("");

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

  const [disabled, setDisabled] = useState("")

  // Handle input changes
  const handleFName = (e) => setFName(e.target.value);
  const handleLName = (e) => setLName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handlePhone = (e) => {
    const rawPhoneNumber = e.target.value;
    const formattedPhoneNumber = rawPhoneNumber.replace(/\D/g, ''); // Remove non-digit characters
    if (formattedPhoneNumber.length <= 10) {
      // Format the phone number 
      const formatted = formattedPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
      setPhone(formatted);
      
    }
  };
  
  const handleImageRef = event => {

    // Disable the submit button while uploading the file
    setDisabled("true")

    console.log(event.target.files[0])

    const selectedFile = event.target.files[0];
    setImageRef(selectedFile.name);
    console.log({imageRef});

    const fileIn = event.target;
    const file = fileIn.files[0];
    if (file && file.size < 190e5) {

      //setImageRef(event.target.value);
      //console.log({imageRef});

      const formdata = new FormData()
      formdata.append("image", event.target.files[0])
      fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
          Authorization: "Client-ID 9aec569336c27a5",
          Accept: "application/json",
        },
        body: formdata

      }).then(data => data.json()).then(data => {
        setLink(data.data.link)
        setDisabled("");
        console.log("Link:  " + {link})
      });
    } else {
      console.log("File too big");
    }
  };

  // Use to capture the Inquiry ID
  const [autoId, setAutoId] = useState("");

  const handleSubmit = async () => {
    // Save the data to Firebase
    const docRef = await addDoc(collection(db, "Inquirer"), {    // Reformated for eye appeal and added constant docRef to be used for autoId
      First: first,
      Last: last,
      Email: email,
      Phone: phone,
      Location: location,
      Description: description,
      Date: serverTimestamp(), // Added Date to be Auto Created from Server Timestamp of object TimeStamp
      ImageRef: link,
      State: 1})               // Added State 1 to be created as "Newest Inquiry" state

      setAutoId(docRef.id); // Get the ID of the document that was just created

      // Create a reference to the file location, will be placed in seperate folder for each inquiry for cases of muliple images
      //const storageRef = storage.ref();('Inquiries/${autoId}/${imageRef.name}'); 
      //await storageRef.put(imageRef);

      // Get the download URL of the uploaded image
    //const imageUrl = await storageRef.getDownloadURL();

    // Update the Firestore document with the image URL
    //const docUpdateResult = await updateDoc(docRef, { ImageRef: imageUrl });


      //console.log("Document written with ID: ", autoId);
      //console.log("Image URL: ", imageUrl);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    // Push the Inquiry data to the database
    handleSubmit();

    // Wait for 5 seconds to wait for Inquiry data push
    setTimeout(() => {
      // Send the notification
      emailjs.sendForm('service_wvpurwc', 'template_747huxp', form.current, 'y1XLxwxWca9cZzlcv')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

      // Clear the form
      setFName("");
      setLName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setDescription("");
      setImageRef("");
      setLink("");

      console.log("SENT EMAIL!");
    }, 5000);
    console.log("HERE!!!!");

    // Move the window to the top of the screen
    window.scrollTo(0, 0);
  
    // Reset the values of the disabled
    //setCapVal(true);

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
        
        <div className = 'file'>
        <label htmlFor="image">Reference Image
          <input type="file" accept=".jpg, .png" onChange={handleImageRef} />
        </label>
        </div>

        <input type="text" name="link" value={link} placeholder="Image Link" hidden/>
        <input type="text" name="id" value={autoId} placeholder="INQUIRY ID" hidden />
        
        <br></br>
        
        <ReCAPTCHA 
          sitekey='6LdVvagoAAAAALOqtiBfkZY7sIYlse5jpbJ-tuo6'
          onChange={updateCaptcha}
          theme="dark"
          ref={captchaRef}
        />

        <br></br>

        {disabled && imageRef && (
          <div>
            <p className="text-content1">Image is currently uploading.  Inquiry Submission is disabled until image is processed.</p>
          </div>
        )}
        <button type="submit" disabled={disabled || capVal}>Submit</button>

      </form>

    </div>
    
    <Footer />

    </>
  );
}

export default InquiryPage;
