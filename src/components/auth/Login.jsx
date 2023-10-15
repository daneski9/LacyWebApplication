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
      setError('Unable to login. Please try again.'); // Sway to create an alert for this error message
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
              <button type="submit">Submit</button>

              <Link to="/JulioJimenez/updatepassword">
                <button type="button" onClick={handleLinkClick}>
                  Update Password
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
