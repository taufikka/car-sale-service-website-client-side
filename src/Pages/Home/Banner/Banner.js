import React from 'react';
import image from '../../../images/img1.jpg'
const Banner = () => {
    return (
        <div>
            {/* home pages banner and title  */}
            <div className="row">
                <div className="col-12 col-md-5 d-flex align-items-center" style={{ paddingLeft: '60px' }}>
                    <div className='text-center'>
                        <h3>We Don't Sell Cars</h3>
                        <h1 className='fw-bold'>We <span className='text-success'>SELL</span> A DREAM.</h1>
                    </div>
                </div>
                <div className="col-md-7 px-0 col-12 text-center">
                    <img className='w-75' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;