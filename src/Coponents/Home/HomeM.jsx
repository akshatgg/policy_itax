import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import InsuranceCategories from './InsuranceCategories';
import AlsoBuy from './AlsoBuy';
import Insurance from './Insurance';

const HomeM = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Header/>
            <HeroBanner />
         
            <Insurance/>
            
        </div>
    );
};

export default HomeM;