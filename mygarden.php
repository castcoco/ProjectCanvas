<?php

//print_r( $_POST );
//exit;

$servername = "localhost";
$username = "root";
$password = "James0505!";
$dbname = "home_grow";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO garden_items (type, height, width, top, bottom, `left`, `right`, `garden_id`) VALUES";

foreach($_POST['data'] as $plant) {
	
$sql .= sprintf(" ('%s', '%s', '%s', '%s', '%s', '%s', '%s', %d),", 
	$plant['type'], $plant['height'], $plant['width'], $plant['top'], $plant['bottom'], $plant['left'], $plant['right'], $plant['garden_id']) ;

	
print_r( $plant );

}

$sql = rtrim($sql, ',');

// echo $sql;

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();