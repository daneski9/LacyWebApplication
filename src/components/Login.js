import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Do something with the form data, e.g. send it to a server
  }; 
  
/*
  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log(`Forgot Password: ${username}`);
    // Do something with the form data, e.g. send it to a server
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit} className="user-pass-container">
        
        <input type="text" id="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        <input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />

        <div class = "buttons"> 
          
          <Link to="/JulioJimenez/adminlanding">
            <button type="button">Submit</button> 
          </Link>

          <Link to="/resetpassword">
            <button type="button">Reset Password</button>
          </Link>

          <Link to='/'>
            <button type="button">Back</button>
          </Link>
        
        </div>  

      </form>
    </div>
  );
}

export default Login;