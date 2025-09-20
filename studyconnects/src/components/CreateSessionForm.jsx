import React from "react";
import "./CreateSessionForm.css";

function CreateSessionForm() {
  return (
    <div className="create-session-container">
      <div className="session-image">
        
      </div>

      <form className="session-form">
        <h2>Create Session <span>📝</span></h2>

        <label>Title</label>
        <input type="text" placeholder="Session Title" />

        <label>Description</label>
        <textarea placeholder="Enter a brief description..." rows="4"></textarea>

        <div className="row">
          <div>
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Start Time</label>
            <input type="time" />
          </div>
          <div>
            <label>End Time</label>
            <input type="time" />
          </div>
        </div>

        <label>Max. Enrollment</label>
        <input type="number" placeholder="Maximum number of students" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateSessionForm;
