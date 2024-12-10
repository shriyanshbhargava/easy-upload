<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root"; // Replace with your database username
$password = "root"; // Replace with your database password
$dbname = "easeupload"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    
    // Get file details
    $fileName = basename($file['name']);
    $fileTmpName = $file['tmp_name'];
    $fileError = $file['error'];
    $fileSize = $file['size']; // File size
    $fileType = $file['type']; // MIME type of the file
    
    // Check if there was no error uploading the file
    if ($fileError === 0) {
        // Define the target directory to upload the file
        $uploadDirectory = "uploads/";
        
        // Generate a unique file name to prevent overwriting
        $newFileName = uniqid('', true) . "_" . $fileName;
        $fileDestination = $uploadDirectory . $newFileName;
        
        // Move the file to the server
        if (move_uploaded_file($fileTmpName, $fileDestination)) {
            // File uploaded successfully, now insert into database
            // Remove the file_size from the SQL query if not required
            $sql = "INSERT INTO documents (file_name, file_path, file_type) VALUES ('$newFileName', '$fileDestination', '$fileType')";
            
            if ($conn->query($sql) === TRUE) {
                echo "File uploaded successfully and data saved to database.";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "There was an error uploading the file.";
    }
}

$conn->close();
?>
