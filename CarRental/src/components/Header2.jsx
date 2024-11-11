// components/Header.js
import React from "react";
import "./styles.css";
import logo from "./images/logo-removebg.png";

function Header2() {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Lamborghini Logo" className="top_logo" />
        </div>
        <div className="container">
          <h1>Lamborghini-Evo</h1>
          <p>Experience luxury and performance like never before.</p>
        </div>
      </div>
    </header>
  );
}

export default Header2;
