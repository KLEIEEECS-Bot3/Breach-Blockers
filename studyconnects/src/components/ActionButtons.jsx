import { Button } from "./ui/button.jsx";
import { Video, Brain, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import "./ActionButtons.css";

export function ActionButtons() {
  const handleJoinSession = () => {
    console.log("Joining session...");
    // In a real app, this would connect to the video session
  };

  const handleCreateQuiz = () => {
    console.log("Creating quiz...");
    // In a real app, this would open quiz creation interface
  };

  return (
    <Card>
      <CardContent className="action-buttons-content">
        <div className="buttons-container">
          <Button 
            className="action-button" 
            size="lg" 
            onClick={handleJoinSession}
          >
            <Video className="button-icon" />
            Start Session
          </Button>
          <Button 
            variant="outline" 
            className="action-button" 
            size="lg" 
            onClick={handleCreateQuiz}
          >
            <Brain className="button-icon" />
            Create Quiz
          </Button>
        </div>
        <div className="participants-info">
          <p className="participants-text">
            <Users className="participants-icon" />
            3 participants currently online
          </p>
        </div>
      </CardContent>
    </Card>
  );
}