import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Simulate login
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });

      // ✅ Notify App to switch to Create Session form
      onLoginSuccess();
    } else {
      // Simple validation for signup
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      console.log("Signup Data:", formData);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Join StudyConnect</h2>

        <div className="tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <p>
                Welcome back, student!
                <br /> Sign in to continue your study journey
              </p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </>
          ) : (
            <>
              <p>
                Create your student account
                <br /> Join thousands of students and start your study journey
              </p>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Create Account
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default AuthModal;
