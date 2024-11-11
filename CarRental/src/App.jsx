import React, { useState } from "react";
import "./App.css";
import Header2 from "./components/Header2";
import CarDetails from "./components/CarDetails";
import RentalForm from "./components/RentalForm";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header2/>
      <CarDetails />
      <RentalForm onSubmit={openModal} /> {}

      {}
      {isModalOpen && <ConfirmationModal closeModal={closeModal} />}
    </div>
  );
}

export default App;







