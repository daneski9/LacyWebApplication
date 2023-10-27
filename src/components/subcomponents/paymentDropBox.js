import React, { useState } from 'react';

import paypal from '../images/paypal.png';
import zelle from '../images/zelle.jpeg';
import cashapp from '../images/cash_app.jpg';
import venmo from '../images/venmo.png';
import square from '../images/square.png'

import '../julioj/julioCSS/PaymentOptions.css';

function Box({title}) {
  return (
    <div className='box-payment-portals'>
      {title === 'zelle' ? <img src={zelle} class="zelleImage" ></img> : null}
      {title === 'paypal' ? <img src={paypal} class="paypalImage"></img> : null}
      {title === 'cashapp' ? <a href="https://cash.app/$jayytatts26" target="_blank"><img src={cashapp} class="cashappImage"></img></a>  : null}
      {title === 'venmo' ? <a href="https://account.venmo.com/u/Julio-Jimenez-35" target="_blank"><img src={venmo} class="venmoImage"></img></a> : null}
      {title === 'square' ? <a href="https://checkout.square.site/merchant/ML4MGV53N55PY/checkout/3P4YQIBPO5WLUGK73WNRKKEP" target="_blank"><img src={square} class="squareImage"></img></a> : null}
    </div>
  );
}

export default Box;