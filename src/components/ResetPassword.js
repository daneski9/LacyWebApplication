import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../DataBase'; // Import your Firebase authentication instance

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState(null);

  const sendResetEmail = () => {
    // Send a password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Email sent successfully
        setResetSent(true);
        setResetError(null); // Clear any previous error messages
      })
      .catch((error) => {
        setResetSent(false);
        // Handle errors
        if (error.code === 'auth/user-not-found') {
          // User not found error
          setResetError('No account associated with this email.');
        } else {
          // Other errors
          setResetError('Please enter an email.');
        }
      });
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {resetError && <p>{resetError}</p>}
      {resetSent ? (
        <div>
          <p>f your email is registered with us, you will receive instructions to reset your password.</p>
          <Link to="/JulioJimenez/login"><button type="button">Back to Login</button></Link>
        </div>
      ) : (
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={sendResetEmail}>
            Send Password Reset Email
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
