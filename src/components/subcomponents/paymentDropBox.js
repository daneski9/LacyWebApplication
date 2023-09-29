import React, { useState } from 'react';
import zelle from '../images/zelle.jpeg';
import '../julioj/julioCSS/PaymentOptions.css';

function Box({title}) {
  return (
    <div className='box'>
      {title === 'zelle' ? <img src={zelle} class="zelleImage" ></img> : null}
      {title === 'paypal' ? <button className="continue-pay">Continue</button> : null}
      {title === 'cashapp' ? <button className="continue-pay">Continue</button>  : null}      
    </div>
  );
}

export default Box;