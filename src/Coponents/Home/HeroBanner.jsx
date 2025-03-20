import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative mb-12 bg-gradient-to-r from-gray-900 to-indigo-900 rounded-xl overflow-hidden">
            <div className="relative z-10 p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">Health insurance with</h2>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-yellow-400">Unlimited</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sum Insured</h3>
                <p className="text-gray-300 mb-4">also available now</p>
                
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
                    View plans
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                
                <div className="text-xs text-gray-300 mt-4">
                    *Standard T&C apply<br />
                    FHPL/Retail/SOM/Health Insurance/Ad No.129
                </div>
            </div>
            
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
            </div>
        </div>
    );
};

export default HeroBanner;