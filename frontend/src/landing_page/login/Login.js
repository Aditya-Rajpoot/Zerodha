import React, { useState } from 'react';
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "zerodha-backend-3wdd.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );
      if (data.success) {
        window.location.href = "https://zerodha-dashboard-xj7p.onrender.com";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Check your email/password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;