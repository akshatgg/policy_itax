import React from 'react';

const Header = () => {
    return (
        <div className="mb-10">
            <h1 className="text-4xl text-gray-700 font-light">
                Let's find you
                <br />
                <span className="text-4xl font-semibold text-indigo-900">the Best Insurance</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="flex items-center gap-3">
                    <div className="bg-purple-50 text-purple-500 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-purple-600 font-medium">51 insurers offering</p>
                        <p className="text-purple-600 font-medium">lowest prices</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="bg-orange-50 text-orange-500 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-orange-500 font-medium">Quick, easy &</p>
                        <p className="text-orange-500 font-medium">hassle free</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;