import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './serviceBanner.css';


const ServiceBanner = (props) => {
    return(
        <Fragment>
            <Link to='/JulioJimenez/about'>
                <div className='banner'>
                    <img className='bannerImage' src={`${props.data.image}`}/>
                    <div className='fullDescription'>
                        <h2 className='session'>
                            {props.data.session}
                        </h2>
                        <h4 className='deposit'>
                            {`$${props.data.deposit} Deposit`}
                        </h4>
                        <div className='description'>
                            {props.data.description}
                        </div>
                        <div className='timePrice'>
                            {` $${props.data.price}+ | ${props.data.time}`}
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}


export default ServiceBanner;