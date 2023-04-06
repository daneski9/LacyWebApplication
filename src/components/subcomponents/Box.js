import React from 'react';
import './Box.css';

function Box({ data }) {
  return (
    <div className="box">
      <img src={data} alt="" />
      <div className="box-info">
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
}

export default Box;
