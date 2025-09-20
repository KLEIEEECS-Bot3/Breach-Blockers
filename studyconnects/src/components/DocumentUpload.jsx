import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { Upload, FileText, Download, Trash2 } from "lucide-react";
import { useState } from "react";
import "./DocumentUpload.css";

export function DocumentUpload() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Chapter_5_Molecular_Biology.pdf",
      size: "2.4 MB",
      type: "PDF",
      uploadedBy: "Sarah J."
    },
    {
      id: 2,
      name: "DNA_Replication_Practice_Problems.docx",
      size: "856 KB",
      type: "DOCX",
      uploadedBy: "Mike C."
    },
    {
      id: 3,
      name: "Protein_Synthesis_Diagram.png",
      size: "1.2 MB",
      type: "PNG",
      uploadedBy: "Emma D."
    }
  ]);

  const handleFileUpload = () => {
    // In a real app, this would handle file selection and upload
    const newDoc = {
      id: documents.length + 1,
      name: "New_Study_Material.pdf",
      size: "1.8 MB",
      type: "PDF",
      uploadedBy: "You"
    };
    setDocuments([...documents, newDoc]);
  };

  const handleDownload = (doc) => {
    // In a real app, this would trigger file download
    console.log(`Downloading ${doc.name}`);
  };

  const handleDelete = (docId) => {
    setDocuments(documents.filter(doc => doc.id !== docId));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="documents-header">
          <div className="header-title">
            <FileText className="header-icon" />
            Study Materials
          </div>
          <Button size="sm" onClick={handleFileUpload}>
            <Upload className="upload-icon" />
            Upload
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="documents-content">
          {documents.map((doc) => (
            <div key={doc.id} className="document-item">
              <div className="document-info">
                <div className="document-icon-container">
                  <FileText className="document-icon" />
                </div>
                <div>
                  <p className="document-name">{doc.name}</p>
                  <p className="document-meta">
                    {doc.size} • {doc.type} • Uploaded by {doc.uploadedBy}
                  </p>
                </div>
              </div>
              <div className="document-actions">
                <Button size="sm" variant="outline" onClick={() => handleDownload(doc)}>
                  <Download className="action-icon" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(doc.id)}>
                  <Trash2 className="action-icon" />
                </Button>
              </div>
            </div>
          ))}
          {documents.length === 0 && (
            <div className="empty-state">
              <FileText className="empty-icon" />
              <p>No study materials uploaded yet</p>
              <p className="empty-subtitle">Click "Upload" to add documents</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}