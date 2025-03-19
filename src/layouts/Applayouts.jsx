import React from 'react';
import Navbar from '../Coponents/Navbar';
import Footer from '../Coponents/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
const Loadingscreen = () => {
    return (
        <div className="fixed h-screen 2-screen  bg-white flex items-center justify-center">
          <img src='/loading.svg' alt='loading..' style={{width:'100px'}} />
        </div>
    );
};


const AppLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Suspense fallback={<Loadingscreen/>}>
            <Outlet/>
            </Suspense>
            <Footer/>
            
        </div>
    );
};

export default AppLayouts;