import React, { useState } from 'react';

function ResetPassword() {

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

      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit}>
        
        <input type="text" id="username" placeholder="Username"  value={username} onChange={(event) => setUsername(event.target.value)} required />
        <input type="password" id="oldPassword" placeholder="Old Password"  value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} required />
        <input type="password" id="newPassword" placeholder="New Password"  value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required />

        <div>
          <button type="submit">Update Password</button>
        </div>

      </form>
    </div>
  );
}

export default ResetPassword;