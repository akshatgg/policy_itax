import React from 'react';

const InsuranceCategoryCard = ({ discount, icon, title, className }) => {
    return (
        <div className={`group relative flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer ${className}`}>
            {discount && (
                <div className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                    {discount}
                </div>
            )}
            <div className="mb-4">
                {icon}
            </div>
            <div className="text-center text-gray-800 font-medium">
                {title}
            </div>
        </div>
    );
};

export default InsuranceCategoryCard;