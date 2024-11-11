import React from 'react';
import './styles.css'; 

const ConfirmationModal = ({ closeModal }) => {
  return (
    <div className={`modal ${closeModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Thank you for your booking!</h2>
        <p>Your Car has been successfully submitted .
          Please check your mail for furthur details.</p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
