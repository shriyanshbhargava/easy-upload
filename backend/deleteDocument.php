<?php
// CORS headers for allowing cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database connection setup
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "easeupload";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $documentId = $_POST['id'];

    // Get the file path from the database before deleting
    $sql = "SELECT file_path FROM documents WHERE id = $documentId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $filePath = $row['file_path'];

        // Try to delete the file from the server
        if (unlink($filePath)) {
            // Now delete the record from the database
            $deleteSql = "DELETE FROM documents WHERE id = $documentId";
            if ($conn->query($deleteSql) === TRUE) {
                echo json_encode(["message" => "Document deleted successfully"]);
            } else {
                echo json_encode(["message" => "Error deleting document from database: " . $conn->error]);
            }
        } else {
            echo json_encode(["message" => "Failed to delete the file from server"]);
        }
    } else {
        echo json_encode(["message" => "Document not found"]);
    }
} else {
    echo json_encode(["message" => "No document ID provided"]);
}

// Close the database connection
$conn->close();
?>
