import Navbar from "../Navbar";
import React, { useState } from 'react';

function Contact() {
    
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setDescription] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    
    
  };
  
  
  
  
  
  return (
      <>
      <Navbar />
      <div>
        <h1 className="title is-1">This is Julio's Contact Page</h1>
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

        

        <button type="submit">Submit</button>

      </form>
      </div>
      </>
    );
  }
  
  export default Contact;


  