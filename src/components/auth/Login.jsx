import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../DataBase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../julioj/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State variable for error message
  const [failedAttempts, setFailedAttempts] = useState(0); // Track failed login attempts
  const [isLocked, setIsLocked] = useState(false);
  const navigateToLanding = useNavigate();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      window.scrollTo(0, 0);
      navigateToLanding('/JulioJimenez/dashboard');
    } catch (error) {
      console.log(error);
      setFailedAttempts(failedAttempts + 1);
      if (failedAttempts >= 3) {
        setIsLocked(true);
        setError('Account temporarily locked. Please try again later.');
        setTimeout(() => {
          setIsLocked(false);
          setFailedAttempts(0);
          setError('');
        }, 30000); // Unlock the account after 30 seconds
      } else {
        setError('Unable to login. Please try again.');
        alert('Wrong password');
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-page-container">
        <h1 className="login_header">Log In</h1>
        <div className="log-in-container">
          <form onSubmit={handleSubmit} className="user-pass-container">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <div className="buttons">
              <button type="submit" disabled={failedAttempts >= 3}>Submit</button>

              <Link to="/JulioJimenez/resetpassword">
                <button type="button" onClick={handleLinkClick}>
                  Forgot Password
                </button>
              </Link>

              <Link to="/JulioJimenez/about">
                <button type="button" onClick={handleLinkClick}>
                  Back
                </button>
              </Link>
            </div>
          </form>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
