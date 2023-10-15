import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from './julioj/Footer';
import { Link } from 'react-router-dom';
import {auth} from '../DataBase'
import {updatePassword} from "firebase/auth";


function UpdatePassword() {

  // const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);



  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    
    const user = auth.currentUser;
    updatePassword(user, newPassword).then(() => {
      // Update successful.
      setSuccess('Password updated successfully.');
    }).catch((error) => {
      console.log(error.message)
    });
    
    
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  auth.onAuthStateChanged(user => {
    if(!user) {
      window.location = '/JulioJimenez/login'; //If User is not logged in, redirect to login page
    }
  });
  return (
    <>
      <Navbar />

      <div className="admin-page-container">
        <h1 className="login_header">Update Password</h1>
        <div>{success && <p>{success}</p>}</div>
        <div></div>{error && <p>{error}</p>}
        <form onSubmit={handleUpdatePassword} className='user-pass-container'>
          {/* <input type="password" id="oldPassword" placeholder="Old Password" onChange={(event) => setOldPassword(event.target.value)} required /> */}
          <input type="password" id="newPassword" placeholder="New Password" onChange={(event) => setNewPassword(event.target.value)} required />

          <div>
            <button type="submit">Submit</button>

            <Link to='/JulioJimenez/Dashboard'>
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