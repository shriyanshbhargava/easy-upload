import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Trash2, Edit2, FileText } from "lucide-react";
import { Modal } from "antd";

const initialDocuments = [
  {
    id: 1,
    name: "Passport.pdf",
    status: "Verified",
    url: "/path/to/passport.pdf",
  },
  {
    id: 2,
    name: "Driver_License.jpg",
    status: "Pending",
    url: "/path/to/driver_license.jpg",
  },
  {
    id: 3,
    name: "Birth_Certificate.pdf",
    status: "Verified",
    url: "/path/to/birth_certificate.pdf",
  },
];

function DocumentsPage() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currentDocId, setCurrentDocId] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        status: "Pending",
        url: URL.createObjectURL(file),
      };
      setDocuments([...documents, newDoc]);
    }
  };

  const showDeleteModal = (id) => {
    setCurrentDocId(id);
    setIsDeleteModalVisible(true);
  };

  const handleDelete = () => {
    setDocuments(documents.filter((doc) => doc.id !== currentDocId));
    setIsDeleteModalVisible(false);
  };

  const handleEdit = (id, name) => {
    setCurrentDocId(id);
    setEditName(name);
    setIsEditModalVisible(true);
  };

  const handleSave = () => {
    setDocuments(
      documents.map((doc) =>
        doc.id === currentDocId ? { ...doc, name: editName } : doc
      )
    );
    setEditingId(null);
    setIsEditModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">My Documents</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload New Document</h2>
          <div className="flex items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <Upload className="mr-2" />
              <span>Choose File</span>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
            <span className="ml-4 text-gray-500">No file chosen</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingId === doc.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    ) : (
                      doc.name
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        doc.status === "Verified"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex justify-center space-x-4">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FileText className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleEdit(doc.id, doc.name)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => showDeleteModal(doc.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal
          title="Confirm Delete"
          visible={isDeleteModalVisible}
          onOk={handleDelete}
          onCancel={() => setIsDeleteModalVisible(false)}
        >
          <p>Are you sure you want to delete this document?</p>
        </Modal>

        <Modal
          title="Edit Document Name"
          visible={isEditModalVisible}
          onOk={handleSave}
          onCancel={() => setIsEditModalVisible(false)}
        >
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </Modal>
      </div>
    </div>
  );
}

export default DocumentsPage;
