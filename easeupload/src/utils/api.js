import axios from "axios";

const api = {
  getDocuments: async () => {
    const response = await axios.get("/api/getDocuments.php");
    return response.data;
  },
  uploadDocument: async (formData) => {
    await axios.post("/api/uploadDocument.php", formData);
  },
  updateStatus: async (id, status) => {
    await axios.post("/api/updateStatus.php", { id, status });
  },
  deleteDocument: async (id) => {
    await axios.post("/api/deleteDocument.php", { id });
  },
};

export default api;
