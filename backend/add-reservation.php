<?php
require_once "./utils/db-connect.php";
require_once "./models/reservation.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read the JSON input from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if the required fields are present in the request
    if (!isset($data["name"]) || !isset($data["phone"]) || !isset($data["eventDate"]) || !isset($data["eventStartTime"]) || !isset($data["eventType"]) || !isset($data["mealType"]) || !isset($data["numberOfPeople"])) {
        $response = [
            "status" => "error",
            "message" => "Required fields are missing."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    //Create a new Reservation object
    $reservation = new Reservation($conn);
    $success = $reservation->create($data);

    // Check if the data was inserted successfully
    if ($success) {
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "Form submitted successfully."
        ];
    } else {
        // If an error occurs during data insertion
        $response = [
            "status" => "error",
            "message" => "An error occurred"
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

