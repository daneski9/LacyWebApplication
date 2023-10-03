import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../DataBase";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from '../julioj/Footer';


function Login() {

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Submit button for the login page:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateToLanding = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password); // sign-in. pause the function's execution until the promise from signInWithEmailAndPassword(auth, email, password) is either fulfilled or rejected.
        console.log(userCredential);
        window.scrollTo(0, 0);
        navigateToLanding('/JulioJimenez/adminlanding'); // Navigate after a successful login, does not require a click like <Link> does.
    } catch (error) {
        console.log(error);
    }
  };
  
/*
  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log(`Forgot Password: ${username}`);
    // Do something with the form data, e.g. send it to a server
  }; */

  return (
    <>
      <Navbar />

      <div className = "log-in-container">

        <h1 class="login_header">Log In</h1>

        <form onSubmit={handleSubmit} className="user-pass-container">
          
          
          <input type="text" id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />

          <div class = "buttons"> 

              <button type="submit">Submit</button> 

              <Link to="/JulioJimenez/resetpassword">
              <button type="button" onClick={handleLinkClick}>Reset Password</button>
              </Link>

              <Link to='/JulioJimenez/about'>
              <button type="button" onClick={handleLinkClick}>Back</button>
              </Link>
          </div>  

        </form>
      </div>
    
      <Footer />
    </>
  );
}

export default Login;