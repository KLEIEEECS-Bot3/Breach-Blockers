import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { Avatar, AvatarFallback } from "./ui/avatar.jsx";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import "./MessagesSection.css";

export function MessagesSection() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Sarah Johnson",
      content: "Hey everyone! Ready to dive into molecular biology today?",
      timestamp: "2:30 PM",
      initials: "SJ"
    },
    {
      id: 2,
      user: "Mike Chen",
      content: "Yes! I've been reviewing the DNA replication notes. Have some questions about Okazaki fragments.",
      timestamp: "2:32 PM",
      initials: "MC"
    },
    {
      id: 3,
      user: "Emma Davis",
      content: "Perfect timing! I found a great diagram that explains the process clearly.",
      timestamp: "2:35 PM",
      initials: "ED"
    }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        initials: "YO"
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <Card className="messages-card">
      <CardHeader>
        <CardTitle className="messages-header">
          <MessageSquare className="header-icon" />
          Messages
        </CardTitle>
      </CardHeader>
      <CardContent className="messages-content">
        <div className="messages-list">
          {messages.map((message) => (
            <div key={message.id} className="message-item">
              <Avatar className="message-avatar">
                <AvatarFallback>{message.initials}</AvatarFallback>
              </Avatar>
              <div className="message-content">
                <div className="message-header">
                  <span className="message-user">{message.user}</span>
                  <span className="message-timestamp">{message.timestamp}</span>
                </div>
                <p className="message-text">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button size="sm" onClick={handleSendMessage}>
            <Send className="send-icon" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}