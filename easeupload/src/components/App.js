import React from "react";
import DocumentList from "./DocumentList";
import UploadDocument from "./UploadDocument";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <DocumentList />
      <UploadDocument />
    </div>
  );
};

export default App;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setMessage("No file selected!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/uploadDocument.php",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       if (response.data.status === "success") {
//         setMessage("File uploaded successfully");
//       } else {
//         setMessage("Error uploading file");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Failed to upload");
//     }
//   };

//   return (
//     <div>
//       <h1>My Documents</h1>
//       <div>
//         <h2>Upload New Document</h2>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={handleUpload}>Upload File</button>
//         {message && <p>{message}</p>}
//       </div>

//       {/* Fetch and display uploaded documents */}
//       <h2>My Documents</h2>
//       <DocumentsList />
//     </div>
//   );
// };

// const DocumentsList = () => {
//   const [documents, setDocuments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/getDocuments.php"
//       );
//       setDocuments(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   if (loading) {
//     return <p>Loading documents...</p>;
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Type</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {documents.map((doc, index) => (
//           <tr key={index}>
//             <td>{doc.name}</td>
//             <td>{doc.type}</td>
//             <td>{doc.status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default App;