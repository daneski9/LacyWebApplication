import React from 'react';

function Box(props) {
  return (
    <div className="box">
      {props.imageSrc && (
        <img
          className="image"
          src={props.imageSrc}
          alt={props.image ? props.image.name : ''}
        />
      )}
    </div>
  );
}

export default Box;
