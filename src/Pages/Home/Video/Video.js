import React from 'react';
import img1 from '../../../images/sea.jpg'

const Video = () => {
    return (
        <div className="my-5 bg-secondary text-white">
            <h1 className="py-5  text-center">A Simply Perfect Place To Get Lost</h1>
            <div className="d-md-flex container">
                <div className="col-md-6">
                    <img className="img-fluid rounded-circle mb-5" src={img1} alt="" />
                </div>
                <div className="col-md-6 p-5 justify-content-center d-flex align-items-center">
                    <h5>
                        Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.I hope the the tour will be best Tour with TOURTOGETHER family.Because of client satisfaction is the main key to our success
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default Video;