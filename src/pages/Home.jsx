import React from 'react';
import { InsuranceProvider } from '../Coponents/Home/InsuranceContext';
import HomeM from '../Coponents/Home/HomeM';
const Home = () => {
    return (
        <InsuranceProvider>
        <div className="min-h-screen bg-gray-100">
          <HomeM/>
        </div>
      </InsuranceProvider>
    );
};

export default Home;