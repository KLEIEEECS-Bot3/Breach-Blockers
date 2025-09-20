import React from "react";
import "./Navbar.css";

function Navbar({ onJoinClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">🎓 StudyConnect</span>
      </div>
      <div className="navbar-right">
        <a href="#" onClick={onJoinClick}>Sign In</a>
        <button className="btn-primary" onClick={onJoinClick}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
