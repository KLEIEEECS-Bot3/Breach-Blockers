import React from "react";
import "./Footer.css";

function Footer({ onJoinClick }) {
  return (
    <footer className="footer">
      <h2>Ready to boost your grades?</h2>
      <p>
        Join thousands of students who are already studying smarter, not harder
        with StudyConnect.
      </p>
      <button className="btn-primary" onClick={onJoinClick}>
        Join StudyConnect Today
      </button>
    </footer>
  );
}

export default Footer;
