import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './Rent.css'
import Caraousell from './components/Caraousell';
import Collections from './components/Collections';
import Footer from './components/Footer';
// import LandingPage from './components/Landing';

// import AboutPage from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';

const Rent = () => {
  return (
    <Router>
      <Header /> 

      <Routes>
        {/* routes for variable components in pages */}
        {/* <Route path="/home" element={<LandingPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/rent" element={<><Caraousell /><Collections /></>} />
        
        {/* fallback route */}
        <Route path="*" element={<><Caraousell /><Collections /></>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default Rent;
