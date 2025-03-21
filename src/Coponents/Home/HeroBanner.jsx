import React, { useState, useEffect } from 'react';

const SlidingBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Array of banner content
  const banners = [
    // PolicyBazaar Health Insurance Banner
    {
      title: "Health insurance with",
      highlight: "Unlimited",
      subtitle: "Sum Insured",
      description: "also available now",
      buttonText: "View plans",
      disclaimer: "*Standard T&C apply\nFHPL/Retail/SOM/Health Insurance/Ad No.129",
      gradient: "from-gray-900 to-indigo-900",
      iconBg: "from-pink-400 to-red-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    // ITaxEasy Banner
    {
      title: "File your taxes",
      highlight: "Hassle-free",
      subtitle: "ITR Filing",
      description: "simple, quick & secure",
      buttonText: "Start filing",
      disclaimer: "*As per Income Tax Act, 1961\nITaxEasy/Digital/ITR/Ad No.245",
      gradient: "from-emerald-800 to-teal-900",
      iconBg: "from-yellow-400 to-amber-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    // Additional PolicyBazaar Banner
    {
      title: "Term Life Insurance",
      highlight: "₹1 Crore",
      subtitle: "Coverage",
      description: "starting at just ₹490/month",
      buttonText: "Get quote",
      disclaimer: "*Terms and conditions apply\nPolicyBazaar/Life/TRM/Ad No.358",
      gradient: "from-blue-900 to-purple-900",
      iconBg: "from-blue-400 to-cyan-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg w-full mx-auto">
      <div className="relative h-64 md:h-72">
        {banners.map((banner, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full bg-gradient-to-r ${banner.gradient} transition-all duration-700 ease-in-out transform ${
              activeSlide === index 
                ? "opacity-100 translate-x-0" 
                : activeSlide > index 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="relative z-10 p-8 text-white h-full">
              <div className="banner-content">
                <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-yellow-400">{banner.highlight}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{banner.subtitle}</h3>
                <p className="text-gray-300 mb-4">{banner.description}</p>
                
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
                  {banner.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="text-xs text-gray-300 mt-4">
                  {banner.disclaimer.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="relative">
                <div className={`w-32 h-32 bg-gradient-to-br ${banner.iconBg} rounded-full opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {banner.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? "bg-white scale-125" : "bg-white opacity-40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Add custom styling to ensure text displays properly and animations work
const styleElement = document.createElement('style');
styleElement.textContent = `
  .banner-content {
    opacity: 1 !important;
    visibility: visible !important;
    display: block !important;
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0% { transform: translateY(-50%) translateX(0); }
    50% { transform: translateY(-50%) translateX(-5px); }
    100% { transform: translateY(-50%) translateX(0); }
  }
`;
document.head.appendChild(styleElement);

export default SlidingBanner;