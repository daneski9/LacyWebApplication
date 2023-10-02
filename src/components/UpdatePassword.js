import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from './julioj/Footer';
import { Link } from 'react-router-dom';

function UpdatePassword() {

  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Old Password: ${oldPassword}`);
    console.log(`New Password: ${newPassword}`);
    // Do something with the form data, e.g. send it to a server
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />

      <div>
        <h1>Update Password</h1>

        <form onSubmit={handleSubmit} className='user-pass-container'>
          
          <input type="text" id="username" placeholder="Username"  value={username} onChange={(event) => setUsername(event.target.value)} required />
          <input type="password" id="oldPassword" placeholder="Old Password"  value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} required />
          <input type="password" id="newPassword" placeholder="New Password"  value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />

          <div>
            <button type="submit">Submit</button>

            <Link to='/JulioJimenez/login'>
              <button type="button" onClick={handleLinkClick}>Back</button>
            </Link>
          </div>

        </form>
        
      </div>

      <Footer />
    </>
  );
}

export default UpdatePassword;