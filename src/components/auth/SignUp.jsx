import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../DataBase";


import Navbar from "../Navbar";
import Footer from '../julioj/Footer';


function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  
  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    console.log(userCredential)
    }).catch((error) => {
    console.log(error)
    })

    //console.log(`Email: ${email}`);
    //console.log(`Password: ${password}`);
    // Do something with the form data, e.g. send it to a server
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

        <h1 class="login_header">Create Account</h1>

        <form onSubmit={signUp} className="user-pass-container">
          
          
          <input type="text" id="Email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />

          <div class = "buttons"> 
            
            <button type="submit">Sign Up</button> 

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

export default SignUp;

/*
<Link to="/JulioJimenez/adminlanding"></Link>
   <button type="submit">Submit</button>
</Link>

*/