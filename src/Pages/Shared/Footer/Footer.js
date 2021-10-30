import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex text-center footer text-white pb-2 pt-2">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="">Should be know</h5>
                    <li className="li-style">What do you mean by tourism</li>
                    <li className="li-style">What is the best definition of tourism?</li>
                    <li className="li-style">What is tourism in simple words?</li>
                    <li className="li-style">What are the 4 types of tourism?</li>
                    <li className="li-style">What is tourism in simple words?</li>
                    <li className="li-style">What is the main purpose of tourism?</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Browse</h5>
                    <li className="li-style ">Select your Loaction</li>
                    <li className="li-style">Know aobut our service</li>
                    <li className="li-style">Our specialty</li>
                    <li className="li-style">Visitor Feed Back</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Social Media</h5>
                    <div className="text-info">
                        <i className="fs-2  m-2 fab fa-facebook"></i>
                        <i className="fs-2 m-2 fab fa-google ms-3"></i>
                        <i className="fs-2  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;