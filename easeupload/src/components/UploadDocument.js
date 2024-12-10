import React, { useState } from "react";
import axios from "axios";

const UploadDocument = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Update the URL to match XAMPP's folder structure
      const response = await axios.post(
        "http://localhost/backend/uploadDocument.php",
        formData
      );
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("There was an error uploading the document:", error);
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadDocument;
