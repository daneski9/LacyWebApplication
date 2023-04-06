import React from 'react';

function Box(properties) {
  return (
    <div className="box">
      {properties.imageSrc && (
        <img
          className="image"
          src={properties.imageSrc}
          alt={properties.image ? properties.image.name : ''}
        />
      )}
    </div>
  );
}

export default Box;