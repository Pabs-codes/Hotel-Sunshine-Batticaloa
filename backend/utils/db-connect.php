<?php
// Function to establish a connection to the database

$servername = "localhost";
$username = "root";
$password = "cccc";
$dbname = "dbsunshinegra";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die ("Connection failed: " . $conn->connect_error);
}

// create database if not exists
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    $conn->select_db($dbname);
} else {
    echo "Error creating database: " . $conn->error;
}

// sql to create tables
$sqls = [
    "CREATE TABLE IF NOT EXISTS reservation (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        company_name VARCHAR(100),
        phone VARCHAR(10) NOT NULL,
        email VARCHAR(50),
        date_time DATETIME NOT NULL,
        event_type VARCHAR(20) NOT NULL,
        meal_type VARCHAR(10) NOT NULL,
        count INT(4) NOT NULL,
        remarks TEXT
    )",
    
    "CREATE TABLE IF NOT EXISTS user (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL
    )"
];

foreach ($sqls as $sql) {
    if ($conn->query($sql) === TRUE) {
        // echo "Table created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
}



