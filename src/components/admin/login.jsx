import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password (mandatory)
    if (!password) {
      setError("Password is required");
      return;
    }

    // Validate username and password
    if (username !== "bestbeton" || password !== "123456789") {
      setError("Invalid username or password");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Navigate to the admin route on successful login
    navigate("/PageAdmin1");
  };

  return (
    <div className="login-container">
      <div className="header_login">
        <div className="welcome-container">
          <img 
            src="path-to-your-image.jpg" 
            alt="Welcome Illustration" 
            className="welcome-image" 
          />
          <h1 className="welcome-title">WELCOME TO THE WEBSITE</h1>
        </div>
        <p className="create-account">CREATE ACCOUNT</p>
      </div>
      <div className="login-box">
        <h2 className="user-login">USER LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // HTML validation for mandatory field
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <div className="forgot-password">
              <Link className="forgot-password" to="/Forgotpassword">
                Forgot password?
              </Link>
            </div>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;