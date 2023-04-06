import React, {Fragment} from 'react';
import './Box.css';

function Box({ data, index }) {
  return (
    <Fragment>
        <div className='banner'>
            <img
                className="bannerImage"
                src={`${data}`} 
                alt={''}
                // alt={`${index}`}
            />
        </div>
    </Fragment>
  );
}

export default Box;
