import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import hotelLogo from '../ImagesP/sunshine.png'; // Import the hotel logo image
import './FB.css'

const FollowUsOnFacebook = () => {
  return (
    <div className="follow-us-container">
      <div className="hotel-logo">
        <img src={hotelLogo} alt="Hotel Logo" />
      </div>
      <div className="follow-text">
        <p>Follow Us on Facebook</p>
      </div>
      <div className="follow-buttons">
        <a href="https://www.facebook.com/sunshinegrand.lk" target="_blank" rel="noopener noreferrer" className="follow-button facebook">
          <FaFacebook className="facebook-icon" />
          Follow Now
        </a>
        <a href="https://wa.me/+94776966706" target="_blank" rel="noopener noreferrer" className="follow-button2 whatsapp">
          <FaWhatsapp className="whatsapp-icon" />
          Reach Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FollowUsOnFacebook;
