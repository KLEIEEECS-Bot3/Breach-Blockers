import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      title: "Study Groups",
      text: "Join subject-specific study groups and collaborate with classmates on assignments and projects.",
    },
    {
      title: "Games and Quizzes",
      text: "Play fun educational games and take quizzes to test and improve your knowledge.",
    },
    {
      title: "Exam Prep",
      text: "Organize study sessions, share notes, and prepare for exams together.",
    },
    {
      title: "Academic Calendar",
      text: "Stay organized with assignment deadlines, exam dates, and study schedules.",
    },
  ];

  return (
    <section className="features">
      <h2>Everything you need for academic success</h2>
      <p className="subtitle">
        Powerful study tools designed to help students collaborate, learn
        together, and achieve better grades.
      </p>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">📓</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
