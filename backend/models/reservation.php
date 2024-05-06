<?php
class Reservation{

    private $conn;
    private $table_name = "reservation";

    private $id;
    private $name;
    private $company_name;
    private $phone;
    private $email;
    private $date_time;
    private $event_type;
    private $meal_type;
    private $count;
    private $remarks;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create($data)
    {
        $query = "INSERT INTO " . $this->table_name . " (name, company_name, phone, email, date_time, event_type, meal_type, count, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        $this->name = $data['name'];
        $this->company_name = isset($data['companyName']) ? $data['companyName'] : null;
        $this->phone = $data['phone'];
        $this->email = isset($data['email']) ? $data['email'] : null;
        $this->date_time = $data['eventDate']." ".$data['eventStartTime'];
        $this->event_type = $data['eventType'];
        $this->meal_type = $data['mealType'];
        $this->count = $data['numberOfPeople'];
        $this->remarks = isset($data['remarks']) ? $data['remarks'] : null;


        $stmt->bind_param("sssssssss", $this->name, $this->company_name, $this->phone, $this->email, $this->date_time, $this->event_type, $this->meal_type, $this->count, $this->remarks);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function checkAvailability($data){

        $query = "SELECT * FROM " . $this->table_name . " WHERE date_time LIKE ?";

        $stmt = $this->conn->prepare($query);

        $date = $data['date']."%";

        $stmt->bind_param("s", $date);

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows == 2) {
            return "na";
        }
        else if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            return $row['meal_type'];
        }
        else if ($result->num_rows == 0){
            return "a";
        }
    }

    public function getAllReservations(){
        $query = "SELECT * FROM " . $this->table_name;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public function deleteReservation($id){
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}