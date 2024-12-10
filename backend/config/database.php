<?php
$conn = new mysqli("localhost", "root", "root", "easeupload");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    die("Connection successful");
}
?>
