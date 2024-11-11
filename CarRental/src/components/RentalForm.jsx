import React, { useState } from "react";
import "./styles.css";

const RentalForm = ({ onSubmit }) => {
  const [rentalPeriod, setRentalPeriod] = useState(1);

  
  const handleInputChange = (e) => {
    setRentalPeriod(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  return (
    <div className="rental-form">
      <h2>Book Your Lamborghini Experience</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="rental-period">Rental Period (Days):</label>
        <input
          type="number"
          id="rental-period"
          name="rental-period"
          min="1"
          value={rentalPeriod}
          onChange={handleInputChange}
          required
        />
        <p>Total Price: <span id="total-price">${rentalPeriod * 1200}</span></p>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default RentalForm;
