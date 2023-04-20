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
      <form onSubmit={handleSubmit}>
        <div class = "user-pass-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
        </div>

        <div>
          <div class = "buttons"> 
            <button type="submit">Submit</button>

            <Link to="/forgotpassword">
              <button type="button">Reset Password</button>
            </Link>

            <Link to='/'>
              <button type="button">Back</button>
            </Link>
          </div>  
        </div>
      </form>
    </div>
  );
}

export default Login;