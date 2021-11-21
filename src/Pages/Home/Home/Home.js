import React from 'react';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';
import Video from '../Video/Video';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Video></Video>
            <Offer></Offer>
            
        </div>
    );
};

export default Home;