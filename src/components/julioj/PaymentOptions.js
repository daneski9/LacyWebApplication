import Navbar from "../Navbar";
import React, { useState } from 'react';
import {useRef} from 'react';
import './julioCSS/PaymentOptions.css';

import paypal from "../images/paypal.jpg";
import zelle from "../images/zelle.png";
import cashapp from "../images/cashapp.png";


import Footer from './Footer';

function PaymentOptions() {
  
  return (
    <>
        <Navbar />
        <body className='payment-portal'>

            <h1 class="contact_header">Payment Options</h1>

            <button class="payment-button">
                <img src={paypal} alt="PayPal Logo" class="payment-logo" />
                Pay with PayPal
            </button>

            <button class="payment-button">
                <img src={zelle} alt="Zelle Logo" class="payment-logo" />
                Pay with Zelle
            </button>

            <button class="payment-button">
                <img src={cashapp} alt="Cash App Logo" class="payment-logo" />
                Pay with Cash App
            </button>

        </body>
        
        <Footer />
      </>
    );
  }
  
  export default PaymentOptions;


  