import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Profile.css";

function Profile() {
  const [events, setEvents] = useState([
    { title: "React Study Group", date: "2025-09-20" },
    { title: "JavaScript Fundamentals", date: "2025-09-22" },
    { title: "Web Development Workshop", date: "2025-09-25" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <h1 className="title">StudyConnect</h1>
        <div className="welcome">Welcome back!</div>
        <div className="profile-logo">JD</div>
      </header>

      <div className="main">
        {/* Left Section: Calendar */}
        <div className="card calendar-card">
          <h2>Calendar</h2>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
          />
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Today's Session */}
          <div className="card session-card">
            <h2>Today's Session</h2>
            <h3>Advanced React Patterns</h3>
            <p>
              <strong>Time:</strong>{" "}
              <span className="highlight">3:00 PM - 4:30 PM</span>
            </p>
            <p><strong>Duration:</strong> 90 minutes</p>
            <p>
              <strong>Participants:</strong>{" "}
              <span className="link">12 joined</span>
            </p>
            <p><strong>Topic:</strong> Custom Hooks & Context API</p>
            <p><strong>Instructor:</strong> Sarah Johnson</p>
            <button className="join-btn">Join Session</button>
          </div>

          {/* Live Session Status */}
          <div className="card live-card">
            <h2>Live Session Status</h2>
            <div className="status no-live">🔴 NO LIVE SESSION</div>
            <p>No study sessions are currently active.</p>
            <p>Next session starts in 2 hours.</p>
            <button className="inactive-btn">No Active Sessions</button>
          </div>
        </div>
      </div>

      {/* Session Invitations */}
      <div className="card invitations-card">
        <h2>Session Invitations</h2>

        <div className="invitation">
          <h3>Python Data Structures Deep Dive</h3>
          <p>Invited by: Alex Martinez • Type: Study Group</p>
          <p>Date: December 22, 2024 • Time: 2:00 PM - 4:00 PM</p>
          <div className="actions">
            <button className="accept">Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>

        <div className="invitation">
          <h3>Node.js Best Practices Workshop</h3>
          <p>Invited by: Emma Wilson • Type: Workshop</p>
          <p>Date: December 23, 2024 • Time: 10:00 AM - 12:00 PM</p>
          <div className="actions">
            <button className="accept">Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>

        <div className="invitation">
          <h3>Database Design Discussion</h3>
          <p>Invited by: David Kim • Type: Discussion</p>
          <p>Date: December 24, 2024 • Time: 3:30 PM - 5:00 PM</p>
          <div className="actions">
            <button className="accept">Accept</button>
            <button className="decline">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
