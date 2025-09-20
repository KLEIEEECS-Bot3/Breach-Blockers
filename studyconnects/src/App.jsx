import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";

import { SessionObjectives } from "./components/SessionObjectives.jsx";
import { MessagesSection } from "./components/MessagesSection.jsx";
import { DocumentUpload } from "./components/DocumentUpload.jsx";
import { ActionButtons } from "./components/ActionButtons.jsx";
import { Badge } from "./components/ui/badge.jsx";
import { Calendar, Clock } from "lucide-react";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);     // Modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);   // Login status

  // Called after successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  return (
    <div className="app">
      {/* If NOT logged in: show homepage + auth modal */}
      {!isLoggedIn ? (
        <>
          <Navbar onJoinClick={() => setShowModal(true)} />
          <Hero onJoinClick={() => setShowModal(true)} />
          <Features />
          <Footer onJoinClick={() => setShowModal(true)} />

          {showModal && (
            <AuthModal
              onClose={() => setShowModal(false)}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
        </>
      ) : (
        // If logged in: show detailed study session dashboard
        <div className="app-container">
          {/* Header */}
          <div className="app-header">
            <div className="header-content">
              <div className="header-info">
                <div>
                  <h1 className="header-title">Molecular Biology Study Session</h1>
                  <div className="badge-container">
                    <Badge variant="secondary" className="badge-item">
                      <Calendar className="badge-icon" />
                      Today, Sept 20
                    </Badge>
                    <Badge variant="secondary" className="badge-item">
                      <Clock className="badge-icon" />
                      2:30 - 4:00 PM
                    </Badge>
                    <Badge variant="outline">Biology 101</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div className="content-grid">
              {/* Left Column */}
              <div className="left-column">
                <SessionObjectives />
                <ActionButtons />
              </div>

              {/* Right Column */}
              <div className="right-column">
                <MessagesSection />
                <DocumentUpload />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
