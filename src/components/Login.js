import React, { useState } from 'react';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    // Do something with the form data, e.g. send it to a server
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log(`Forgot Password: ${username}`);
    // Do something with the form data, e.g. send it to a server
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
        </div>
      </form>
    </div>
  );
}

export default Login;