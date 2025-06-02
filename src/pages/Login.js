// Login.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import './Login.css';

function Login({ setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) navigate('/'); // Redirect if already logged in
  }, [navigate]);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userData = { name: user.displayName, email: user.email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Google login failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Xeno CRM</h2>
        <p>Sign in to manage your campaigns</p>
        <button className="google-btn" onClick={loginWithGoogle}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="google-icon"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
