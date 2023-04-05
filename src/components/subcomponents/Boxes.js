import React from 'react';
import Box from './Box';

function Boxes(properties) {
  const rows = Math.ceil(properties.filteredImages.length / 4); // calculate the number of rows
  const displayRows = Math.min(rows, Math.floor(window.innerHeight / 250)); // calculate the number of rows to display based on window height

  const boxes = []; // create an array to store the boxes

  for (let i = 0; i < displayRows; i++) {
    const boxRow = []; // create an array to store the boxes in the current row

    for (let j = 0; j < 4; j++) {
      const imageIndex = i * 4 + j;
      const image = properties.filteredImages[imageIndex] || null;
      const imageSrc = image ? image.src : null;

      boxRow.push(
        <Box
          key={j}
          image={image}
          imageSrc={imageSrc}
        />
      );

      if (imageIndex >= properties.filteredImages.length - 1) {
        break; // stop adding boxes if there are no more images
      }
    }

    if (boxRow.length > 0) {
      boxes.push(
        <div key={i} className="row">
          {boxRow}
        </div>
      );
    }
  }

  return (
    <div>
      {boxes.length > 0 ? boxes : <div className="no-images">No images available</div>}
    </div>
  );
}

export default Boxes;
