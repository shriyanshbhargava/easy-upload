import React, { useEffect, useState } from "react";
import axios from "axios";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      // Update the URL to match XAMPP's folder structure
      const response = await axios.get(
        "http://localhost/backend/getDocuments.php"
      );
      setDocuments(response.data);
    } catch (error) {
      console.error("There was an error fetching the documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments(); // Call the function when the component mounts
  }, []);

  return (
    <div>
      <h2>Document List</h2>
      <ul>
        {documents.map((document, index) => (
          <li key={index}>{document.name}</li> // Adjust according to your response data structure
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
