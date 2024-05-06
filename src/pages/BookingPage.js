

import React, { useEffect, useState } from "react";
import Heading from "../components/common/Heading";
import "./Form.css"; // Import the CSS file
import config from "../config-loader"

import { motion } from "framer-motion";

//fetching the API URL from config.json
const api_url = config.API_URL;

export default function Booking() {
  const [formValid, setFormValid] = useState(false); // This is the form validation state
  const [mealTypes, setMealTypes] = useState([]); // This is the meal types state
  const [availability, setAvailability] = useState(false); // This is the availability state
  const [message, setMessage] = useState({type:'',text:''}); // This is the message from the server
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    eventStartTime: "",
    numberOfPeople: "",
    remarks: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(state=>({
      ...state,
      [name]: value
    }));
    name==='eventDate' && checkAvailability(value);
  };
  
  useEffect(() => {
    checkForm();
  }, [formData,availability]);


  const checkAvailability = async (value) => {
    setMessage({type:'',text:''})
    await fetch(`${api_url}check-availability.php?date=${value}`)
    .then(response => response.json())
    .then(data => {
      setAvailability(data.status==='success')
      setMessage({type:data.status,text:data.message})
      data?.data && setMealTypes(data.data)
    })
    .catch(err=>{
      setMessage({type:'error',text:'Error in checking availability'})
      console.log(err)
    })
  }

  const checkForm =  () => {
    setFormValid(
      (formData.name !== '' &&
      formData.phone !== '' &&
      formData.eventDate !== ''&&
      formData.eventType !== '' &&
      formData.eventStartTime !== '' &&
      formData.numberOfPeople > 0 &&
      availability)
    )
  }
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can handle form submission logic here
  //   console.log(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    fetch(`${api_url}add-reservation.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setMessage({type:data.status,text:data.message});

      data.status === 'success' && setFormData({
        name: "",
        companyName: "",
        phone: "",
        email: "",
        eventDate: "",
        eventType: "",
        mealType: "",
        eventStartTime: "",
        numberOfPeople: "",
        remarks: ""
      });
    });
  }

  const handleMealTypeHover = () => {
    if(formData.eventDate === ''){
      setMessage({type:'warn',text:'Please select the event date first'})
    }
  }

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <motion.div
        className="booking-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="left-div"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Start Time</label>
              <input
                type="time"
                name="eventStartTime"
                value={formData.eventStartTime}
                onChange={handleChange}
              />
            </motion.div>
          </motion.form>
        </motion.div>
        <motion.div
          className="right-div"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="" hidden></option>
                <option value="wedding">Wedding</option>
                <option value="gettogether">Get-Together</option>
                <option value="birthday">Birthday</option>
                <option value="ceremony">Ceremony</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Meal Type</label>
              <select
                name="mealType"
                value={formData.mealType}
                onChange={handleChange}
                disabled={formData.eventDate === '' || !availability}
                onMouseOver={handleMealTypeHover}
              >
                <option value="" hidden></option>
                {mealTypes.map((mealType) => (
                  <option key={mealType} value={mealType.toLowerCase()}>
                    {mealType}
                  </option>
                ))}
              </select>
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Number of People</label>
              <input
                min={0}
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              className="form-group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>Equipment Required/Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
              ></textarea>
            </motion.div>

            <motion.div style={{display:'flex',justifyContent:'space-between'}}>
              <motion.p
                style={{
                  paddingTop: "10px",
                  fontSize: "large",
                  display: "flex",
                  color: message.type === "error" ? "red" : message.type === "success" ? "springgreen" : "orange",
                }}
              >
                {message.text}
              </motion.p>

              <motion.button
                disabled={!formValid}
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                Submit
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </>
  );
}