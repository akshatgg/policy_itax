import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import InsuranceCategories from './InsuranceCategories';
import AlsoBuy from './AlsoBuy';

const HomeM = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Header/>
            <HeroBanner />
            <InsuranceCategories />
            <div className="my-8 flex justify-center">
                <button className="bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-6 py-2 font-medium hover:bg-blue-100 transition-colors">
                    View all products
                </button>
            </div>
            <AlsoBuy />
        </div>
    );
};

export default HomeM;