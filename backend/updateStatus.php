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

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id']) && isset($_POST['status'])) {
    $documentId = $_POST['id'];
    $status = $_POST['status'];

    // Update the status in the database
    $sql = "UPDATE documents SET status = '$status' WHERE id = $documentId";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Document status updated successfully"]);
    } else {
        echo json_encode(["message" => "Error updating document status: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Document ID or status not provided"]);
}

// Close the database connection
$conn->close();
?>
