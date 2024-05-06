<?php

class User{
    private $conn;
    private $table_name = "user";

    private $id;
    private $username;
    private $password;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create($username, $password)
    {
        $query = "INSERT INTO " . $this->table_name . " (username, password) VALUES (?, ?)";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("ss", $username, $password);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
    

    public function validateCredentials($username, $password)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE username = ? AND password = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("ss", $username, $password);

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            return true;
        }

        return false;
    }
}