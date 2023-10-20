import Navbar from "../Navbar";
import React, { useState } from 'react';
import {useRef} from 'react';
import './julioCSS/PaymentOptions.css';
import Box from "../subcomponents/paymentDropBox";

import paypal from "../images/paypal.jpg";
import zelle from "../images/zelle.png";
import cashapp from "../images/cashapp.png";
import venmo from "../images/venmo_logo.png";
import square from "../images/square_logo.jpg";

import Footer from './Footer';

function PaymentOptions() {
  const [paypalOpen, setPayPalOpen] = useState(false);
  const [zelleOpen, setZelleOpen] = useState(false);
  const [cashAppOpen, setCashAppOpen] = useState(false);
  const [venmoOpen, setVenmoOpen] = useState(false);
  const [squareOpen, setSquareOpen] = useState(false);

  const togglePaypal = () => {
    setPayPalOpen(!paypalOpen);
    setCashAppOpen(false);
    setZelleOpen(false);
    setVenmoOpen(false);
    setSquareOpen(false);
  }

  const toggleZelle = () => {
    setZelleOpen(!zelleOpen);
    setCashAppOpen(false);
    setPayPalOpen(false);
    setVenmoOpen(false);
    setSquareOpen(false);
  }

  const toggleCashApp = () => {
    setCashAppOpen(!cashAppOpen);
    setZelleOpen(false);
    setPayPalOpen(false);
    setVenmoOpen(false);
    setSquareOpen(false);
  }

  const toggleVenmo = () => {
    setVenmoOpen(!venmoOpen);
    setCashAppOpen(false);
    setZelleOpen(false);
    setPayPalOpen(false);
    setSquareOpen(false);
  }

  const toggleSquare = () => {
    setSquareOpen(!squareOpen);
    setCashAppOpen(false);
    setZelleOpen(false);
    setPayPalOpen(false);
    setVenmoOpen(false);
  }

  
  return (
    <>

    <Navbar />

    <div className='payment-portal'>
      <h1 className="contact_header">Payment Options</h1>
            
      <button className="payment-button paypal" onClick={togglePaypal}>
        <img src={paypal} alt="PayPal Logo" className="payment-logo" />Pay with PayPal
      </button>
      <div className="box-payment">{paypalOpen ? <Box title = {"paypal"}/> : null}</div>
      <br></br>

      <button className="payment-button" onClick={toggleZelle}>
        <img src={zelle} alt="Zelle Logo" className="payment-logo" />Pay with Zelle
      </button>
      <div className="box-payment">{zelleOpen ? <Box title = {"zelle"}/> : null}</div>
      <br></br>

      <button className="payment-button" onClick={toggleCashApp}>
        <img src={cashapp} alt="Cash App Logo" className="payment-logo" />Pay with Cash App
      </button>
      <div className="box-payment">{cashAppOpen ? <Box  title = {"cashapp"}/> : null}</div>
      <br></br>

      <button className="payment-button" onClick={toggleVenmo}>
        <img src={venmo} alt="Venmo Logo" className="payment-logo" />Pay with Venmo
      </button>
      <div className="box-payment">{venmoOpen ? <Box  title = {"venmo"}/> : null}</div>
      <br></br>

      <button className="payment-button" onClick={toggleSquare}>
        <img src={square} alt="Square Logo" className="payment-logo" />Pay with Square
      </button>
      <div className="box-payment">{squareOpen ? <Box  title = {"square"}/> : null}</div>

    </div>
        
    <Footer />

    </>
  );
}
  
export default PaymentOptions;


  