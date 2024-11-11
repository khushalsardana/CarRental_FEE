// components/CarDetails.js
import React from "react";
import "./styles.css";
import carImage from "./images/lambo_bg2.png";

function CarDetails() {
  return (
    <section className="car-details">
      <div className="container">
        <div className="car-info">
          <img src={carImage} alt="Lamborghini Huracán EVO" className="car-image" />
          <div className="car-text">
            <h2>Lamborghini Huracán EVO</h2>
            <p className="price">From $1,200 per day</p>
            <p className="intro">
              The Lamborghini Huracán EVO is the epitome of Italian engineering and style...
            </p>
            <div className="details">
              <h3>Features</h3>
              <ul>
                <li>5.2L V10 engine with 630 horsepower</li>
                <li>Dynamic Steering and All-Wheel Drive</li>
                {/* {will add more features later} */}
              </ul>
            </div>
            <div className="specifications">
              <h3>Specifications</h3>
              <table>
              <tbody>
          <tr>
            <th>Dimension</th>
            <td>190.4 inches (Length) x 76.0 inches (Width) x 45.9 inches (Height)</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>3,483 lbs</td>
          </tr>
          <tr>
            <th>Fuel Economy</th>
            <td>13 MPG (City) / 18 MPG (Highway)</td>
          </tr>
          <tr>
            <th>Top Speed</th>
            <td>202 mph</td>
          </tr>
        </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarDetails;
