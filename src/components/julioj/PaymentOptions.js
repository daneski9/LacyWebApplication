import Navbar from "../Navbar";
import React, { useState } from 'react';
import {useRef} from 'react';
import './julioCSS/PaymentOptions.css';
import Box from "../subcomponents/paymentDropBox";

import paypal from "../images/paypal.jpg";
import zelle from "../images/zelle.png";
import cashapp from "../images/cashapp.png";
import zelleImage from "../images/zelle.jpeg";



import Footer from './Footer';

function PaymentOptions() {
  const [paypalOpen, setPayPalOpen] = useState(false);
  const [zelleOpen, setZelleOpen] = useState(false);
  const [cashAppOpen, setCashAppOpen] = useState(false);

  const togglePaypal = () => {
    setPayPalOpen(!paypalOpen);
    setCashAppOpen(false);
    setZelleOpen(false);
  }

  const toggleZelle = () => {
    setZelleOpen(!zelleOpen);
    setCashAppOpen(false);
    setPayPalOpen(false);
  }

  const toggleCashApp = () => {
    setCashAppOpen(!cashAppOpen);
    setZelleOpen(false);
    setPayPalOpen(false);
  }
  
  
  return (
    <>
        <Navbar />
        <body className='payment-portal'>
            <h1 class="contact_header">Payment Options</h1>
            
            <button class="payment-button paypal" onClick={togglePaypal}>
                <img src={paypal} alt="PayPal Logo" class="payment-logo" />
                Pay with PayPal
            </button>
            <div className="box">
              {paypalOpen ? <Box title = {"paypal"}/> : null}
            </div>
            <br></br>

            <button class="payment-button" onClick={toggleZelle}>
                <img src={zelle} alt="Zelle Logo" class="payment-logo" />
                Pay with Zelle
            </button>
            <div className="box">
              {zelleOpen ? <Box title = {"zelle"}/> : null}
            </div>
            <br></br>

            <button class="payment-button" onClick={toggleCashApp}>
                <img src={cashapp} alt="Cash App Logo" class="payment-logo" />
                Pay with Cash App
            </button>
            <div className="box">
              {cashAppOpen ? <Box  title = {"cashapp"}/> : null}
            </div>
        </body>
        
        <Footer />
      </>
    );
  }
  
  export default PaymentOptions;


  