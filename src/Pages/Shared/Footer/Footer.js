import React from 'react';
import './Footer.css';

const Footer = () => {
    // footer section
    return (
        <div className='bg-dark text-white'>
            <div className="row footer mx-0">
                <div className="col-md-5 col-12">
                    <p className="ms-4 mt-4 fw-bolder">Follow us</p>
                    <div className='d-flex m-3 fs-3'>
                        <i className="fab fa-facebook-square m-2"></i>
                        <i className="fab fa-twitter-square m-2"></i>
                        <i className="fab fa-instagram  m-2"></i>
                    </div>
                </div>
                {/* others link for information */}
                <div className="col-md-7 col-12 mt-4">
                    <div className='row ms-3'>

                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <p>Useful links</p>
                                    <small>Trips by others</small> <br />
                                    <small>Latest Vehicles</small> <br />
                                    <small>Compare Cars</small> <br />
                                    <small>Our popular services</small>
                                </div>
                                <div className='col-md-6 col-12' style={{ paddingTop: '40px' }}>
                                    <small>Finance & Loan</small> <br />
                                    <small>Insurance</small> <br />
                                    <small>Expert Team</small> <br />
                                    <small>Privacy Policy</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-12'>
                            <p>Contact Details</p>
                            <div>
                                <small><i className="fas fa-map-marker-alt pe-2"></i>  Newyork 10012, USA</small> <br />
                                <small><i className="fas fa-phone-square-alt pe-2"></i>  +44 567 8901234</small> <br />
                                <small><i className="fas fa-envelope-open pe-2"></i>  Supportteam@Carworld.com</small>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='ps-3 mt-2'>COPYRIGHTS CarWorld @2021 ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;