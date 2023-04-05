import React, {Fragment} from 'react';
import './serviceBanner.css';


const ServiceBanner = (props) => {
    return(
        <Fragment>
            <div className='banner'>
                <img className='bannerImage' src={`${props.data.image}`}/>
                <div className='fullDescription'>
                    <h3 className='session'>
                        {props.data.session}
                    </h3>
                    <h4 className='deposit'>
                        {`$${props.data.deposit} Deposit`}
                    </h4>
                    <div className='description'>
                        {props.data.description}
                    </div>
                    <div className='timePrice'>
                        {` $${props.data.price} | ${props.data.time}`}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default ServiceBanner;