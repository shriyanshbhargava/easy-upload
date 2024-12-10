import React, { useState, useEffect } from "react";
import UploadDocument from "../components/UploadDocument"; // Make sure the path is correct
import DocumentList from "../components/DocumentList"; // Assuming this is your list component
import api from "../utils/api";

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const result = await api.getDocuments();
        setDocuments(result);
      } catch (error) {
        setError("Failed to load documents.");
        console.error(error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Documents</h1>
      {error && <p className="text-red-500">{error}</p>}
      <UploadDocument /> {/* Render the UploadDocument component here */}
      <DocumentList documents={documents} /> {/* Render the document list */}
    </div>
  );
};

export default Home;
