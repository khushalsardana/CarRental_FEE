// src/LamborghiniForm.js
import React, { useState } from 'react';
import './lambo.css';

function LamborghiniForm() {
  const dailyRate = 1200;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rentalPeriod: 1,
  });
  const [totalPrice, setTotalPrice] = useState(dailyRate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'rentalPeriod') {
      const rentalDays = parseInt(value, 10) || 1;
      setTotalPrice(rentalDays * dailyRate);
    }
  };

  const validateForm = () => {
    const { name, email, phone, rentalPeriod } = formData;
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert('Please enter a valid name.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
    if (rentalPeriod < 1) {
      alert('Rental period must be at least 1 day.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="car-details">
      <h2>Book Your Lamborghini Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Rental Period (Days):</label>
        <input
          type="number"
          name="rentalPeriod"
          value={formData.rentalPeriod}
          onChange={handleChange}
          min="1"
          required
        />

        <p>Total Price: <span>{`$${totalPrice.toLocaleString()}`}</span></p>
        <button type="submit">Book Now</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for booking the Lamborghini Huracán EVO.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LamborghiniForm;

