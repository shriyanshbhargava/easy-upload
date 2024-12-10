header("Access-Control-Allow-Origin: *");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Allow specific methods (GET, POST, PUT, DELETE, etc.)
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Handle preflight requests (for PUT, DELETE, and some other methods)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// Your existing code for fetching documents
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

// Fetch documents from the database
$sql = "SELECT * FROM documents";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $documents = [];
    while ($row = $result->fetch_assoc()) {
        $documents[] = $row;
    }
    echo json_encode($documents); // Return the documents as JSON
} else {
    echo json_encode(["message" => "No documents found"]);
}

// Close the database connection
$conn->close();
?>
