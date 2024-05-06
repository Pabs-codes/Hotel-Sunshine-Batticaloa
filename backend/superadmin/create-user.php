<?php
$SUPERKEY = "5up3r53cr3tK3y";

require_once "../models/user.php";
require_once "../utils/db-connect.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


//check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $headers = getallheaders();

    // Check if the token is present in the request headers
    if (!isset($headers["Authorization"])) {
        $response = [
            "status" => "error",
            "message" => "Super key is required."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    // Validate the token
    $superkey = $headers["Authorization"];
    $isValid = $superkey === $SUPERKEY;

    if (!$isValid) {
        $response = [
            "status" => "error",
            "message" => "Super key is invalid."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }


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
    $success = $user->create($data["user"], $data["pass"]);

    // Check if the data was inserted successfully
    if ($success) {
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "User created successfully."
        ];
    } else {
        // If an error occurs during data insertion
        $response = [
            "status" => "error",
            "message" => "User creation failed."
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
