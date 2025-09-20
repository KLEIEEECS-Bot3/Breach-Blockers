import React from "react";
import "./Hero.css";

function Hero({ onJoinClick }) {
  return (
    <section className="hero">
      <h1>
        Study Together, Learn <br /> Better
      </h1>
      <p>
        Connect with classmates, form study groups, get homework help, and ace
        your exams through collaborative learning and peer support.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={onJoinClick}>
          Create Session →
        </button>
        <button className="btn-secondary">Join Session</button>
      </div>
    </section>
  );
}

export default Hero;
