<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require_once "../utils/db-connect.php";
require_once "../models/reservation.php";
require_once "../utils/token-manager.php";


// Check if the request method is DELETE
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    
    // Check if the token is present in the request headers
    $headers = getallheaders();

    // Check if the token is present in the request headers
    if (!isset($headers["Authorization"])) {
        $response = [
            "status" => "error",
            "message" => "Authorization token is required."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    // Validate the token
    $token = explode(" ", $headers["Authorization"])[1];
    $isValid = validateToken($token);

    if (!$isValid) {
        $response = [
            "status" => "expired",
            "message" => "Session expired, please login again."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    // Read the query input from the request params
    $data = $_GET;

    if (!isset($data["id"])){
        $response = [
            "status" => "error",
            "message" => "ID is required"
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    //delete reservation
    $reservation = new Reservation($conn);
    $success = $reservation->deleteReservation($data["id"]);

    // Check if the data was deleted successfully
    if ($success) {
        // If data deletion is successful
        $response = [
            "status" => "success",
            "message" => "Reservation deleted successfully",
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
    // If the request method is not DELETE, return an error response
    $response = [
        "status" => "error",
        "message" => "Invalid request method."
    ];

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}