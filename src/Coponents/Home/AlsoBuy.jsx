import React from 'react';

const AlsoBuy = () => {
    const alsoBuyItems = [
        {
            category: "Investment",
            title: "LIC Plans",
            textColor: "text-blue-800"
        },
        {
            category: "Term Life",
            title: "Return of Premium",
            textColor: "text-blue-800"
        },
        {
            category: "Term life",
            title: "Life Insurance for Housewives",
            textColor: "text-blue-800"
        },
        {
            category: "Health Insurance",
            title: "Day 1 Coverage",
            textColor: "text-red-500"
        },
        {
            category: "Health Insurance",
            title: "1 Cr Health Insurance",
            textColor: "text-red-500"
        },
        {
            category: "Health Insurance",
            title: "Personal Accident",
            textColor: "text-red-500"
        },
        {
            category: "Motor Insurance",
            title: "Commercial Vehicles",
            textColor: "text-blue-500"
        },
        {
            category: "Business Insurance",
            title: "Marine Insurance",
            textColor: "text-blue-800"
        },
        {
            category: "Business Insurance",
            title: "Professional Indemnity for Doctors",
            textColor: "text-blue-800"
        },
        {
            category: "Business Insurance",
            title: "Directors & Officers Liability",
            textColor: "text-blue-800"
        },
        {
            category: "Business Insurance",
            title: "Workmen Compensation",
            textColor: "text-blue-800"
        },
        {
            category: "Others",
            title: "Pet Insurance",
            textColor: "text-gray-700"
        },
        {
            category: "Others",
            title: "Personal Cyber Insurance",
            textColor: "text-gray-700"
        }
    ];

    return (
        <div className="mt-8">
            <h2 className="text-xl font-medium text-blue-600 mb-4">ALSO BUY</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {alsoBuyItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <p className="text-xs text-gray-500 mb-1">• {item.category}</p>
                        <p className={`text-sm font-medium ${item.textColor}`}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlsoBuy;