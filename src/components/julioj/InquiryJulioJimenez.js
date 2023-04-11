import Navbar from "../Navbar";
import React, { useState } from 'react';
//import './julioCSS/juliojimenez.css';
function InquiryPage() {
  
  // Hold all of the states of the fields that we need to use for the email
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    // We will need to add additional stuff here to lead to other pages in capture data in Sprint 04
    
  };

  return (
    <>
    <Navbar />
    <div>

      <h1>Inquiry Julio Jimenez</h1>
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
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" value={number} onChange={(event) => setNumber(event.target.value)} required />
        </div>

        <div>
          <label htmlFor="location">Location on the body:</label>
          <input type="text" id="location" value={location} onChange={(event) => setLocation(event.target.value)} required />
        </div>

        <div>
          <label htmlFor="description">Tattoo Description:</label>
          <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} required />
        </div>

        <div>
          <label htmlFor="image">Reference Image:</label>
          <input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} required />
        </div>

        <button type="submit">Submit</button>

      </form>

    </div>
    </>
  );
}

export default InquiryPage;