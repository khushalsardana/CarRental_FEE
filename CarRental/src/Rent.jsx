import React from 'react'
import './App.css'
import Header from './components/Header';
import Caraousell from './components/caraousell';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collections from './components/collections';
import Footer from './components/footer';




function Rent() {
 
  return (
    <>
    <Header/>
    <Caraousell/>
    <Collections/>
    <Footer/>
  </>
  
  )
}

export default Rent

   