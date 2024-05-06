<?php
class ReservationDto{
    public $id;
    public $name;
    public $companyName;
    public $phone;
    public $email;
    public $eventDate;
    public $eventStartTime;
    public $eventType;
    public $mealType;
    public $numberOfPeople;
    public $remarks;

    public function __construct($data){
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->companyName = isset($data['company_name']) ? $data['company_name'] : null;
        $this->phone = $data['phone'];
        $this->email = isset($data['email']) ? $data['email'] : null;
        $this->eventDate = explode(' ',$data['date_time'])[0];
        $this->eventStartTime = explode(' ',$data['date_time'])[1];
        $this->eventType = $data['event_type'];
        $this->mealType = $data['meal_type'];
        $this->numberOfPeople = $data['count'];
        $this->remarks = isset($data['remarks']) ? $data['remarks'] : null;
    }
}