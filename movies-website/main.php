<?php
// Connect to the database (replace with your credentials)
$host = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";
$connection = mysqli_connect($host, $username, $password, $database);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve movie data from the database
$query = "SELECT * FROM movies";
$result = mysqli_query($connection, $query);

$movies = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $movies[] = $row;
    }
}

// Close the database connection
mysqli_close($connection);

// Return the movie data as JSON
echo json_encode($movies);
?>
