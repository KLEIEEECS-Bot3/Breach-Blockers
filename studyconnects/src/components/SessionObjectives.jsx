import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Target, Plus, Edit2, Trash2, Check, X } from "lucide-react";
import { useState } from "react";
import "./SessionObjectives.css";

export function SessionObjectives() {
  const [objectives, setObjectives] = useState([
    { id: 1, text: "Review key concepts from Chapter 5: Molecular Biology" },
    { id: 2, text: "Complete practice problems on DNA replication" },
    { id: 3, text: "Discuss protein synthesis mechanisms" },
    { id: 4, text: "Prepare for upcoming midterm examination" }
  ]);
  
  const [newObjective, setNewObjective] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddObjective = () => {
    if (newObjective.trim()) {
      const newObj = {
        id: Math.max(...objectives.map(o => o.id), 0) + 1,
        text: newObjective.trim()
      };
      setObjectives([...objectives, newObj]);
      setNewObjective("");
    }
  };

  const handleStartEdit = (obj) => {
    setEditingId(obj.id);
    setEditingText(obj.text);
  };

  const handleSaveEdit = () => {
    if (editingText.trim() && editingId) {
      setObjectives(objectives.map(obj => 
        obj.id === editingId ? { ...obj, text: editingText.trim() } : obj
      ));
      setEditingId(null);
      setEditingText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const handleDeleteObjective = (id) => {
    setObjectives(objectives.filter(obj => obj.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="objectives-header">
          <Target className="header-icon" />
          Session Objectives
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="objectives-content">
          {objectives.map((objective, index) => (
            <div key={objective.id} className="objective-item">
              <span className="objective-number">
                {index + 1}
              </span>
              {editingId === objective.id ? (
                <div className="edit-container">
                  <Input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
                    className="edit-input"
                  />
                  <Button size="sm" variant="outline" onClick={handleSaveEdit}>
                    <Check className="action-icon" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                    <X className="action-icon" />
                  </Button>
                </div>
              ) : (
                <div className="objective-display">
                  <span className="objective-text">{objective.text}</span>
                  <div className="objective-actions">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleStartEdit(objective)}
                    >
                      <Edit2 className="action-icon" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleDeleteObjective(objective.id)}
                    >
                      <Trash2 className="action-icon" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Add new objective */}
          <div className="add-objective">
            <span className="add-objective-icon">
              +
            </span>
            <div className="add-objective-container">
              <Input
                placeholder="Add a new objective..."
                value={newObjective}
                onChange={(e) => setNewObjective(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddObjective()}
                className="add-input"
              />
              <Button size="sm" onClick={handleAddObjective}>
                <Plus className="plus-icon" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}