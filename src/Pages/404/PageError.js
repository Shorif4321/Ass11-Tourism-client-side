import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageError.css'

const PageError = () => {
    return (
        <div className="pageError p-5  text-center">
            <div className="py-5 mb-5 mt-5"></div>
            <h6 className="w-50 m-auto mb-5 mt-5 p-5 text-white"></h6>
            <NavLink to="/home"><button className="btn btn-dark">Back to Home page </button></NavLink>
        </div>
    );
};

export default PageError;