import React, { useState } from 'react';

function ForgotPassword() {

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

  return (
    <div>

      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        </div>

        <div>
          <label htmlFor="oldPassword">Old Password</label>
          <input type="password" id="oldPassword" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} required />
        </div>

        <div>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />
        </div>

        <div>
          <button type="submit">Update Password</button>
        </div>

      </form>
    </div>
  );
}

export default ForgotPassword;