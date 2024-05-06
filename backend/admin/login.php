<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Expose-Headers: Authorization");


require_once "../utils/db-connect.php";
require_once "../models/user.php";
require_once "../utils/token-manager.php";


// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read the JSON input from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if the required fields are present in the request
    if (!isset($data["user"]) || !isset($data["pass"])) {
        $response = [
            "status" => "error",
            "message" => "Required fields are missing."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    //Create a new User object
    $user = new User($conn);
    $success = $user->validateCredentials($data["user"], $data["pass"]);

    // Check if the data was inserted successfully
    if ($success) {
        header("Authorization: Bearer " . generateToken() . "\r\n");
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "Login successful."
        ];
    } else {
        // If an error occurs during data insertion
        $response = [
            "status" => "error",
            "message" => "Invalid credentials."
        ];
    }

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    // If the request method is not POST, return an error response
    $response = [
        "status" => "error",
        "message" => "Invalid request method."
    ];

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}