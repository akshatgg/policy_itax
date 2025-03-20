import React from 'react';

const InsuranceCategoryCard = ({ discount, icon, title, className }) => {
    return (
        <div className={`group relative flex flex-col items-center pb-2 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer ${className}`}>
            {discount && (
                <div className="absolute bg-green-200 text-green-800 text-xs w-full">
                    <p className='text-center'>

                    {discount}
                    </p>
                </div>
            )}
            <div className="mb-4 text-center">
                {icon}
            </div>
            <div className="text-center text-gray-800 font-medium">
                {title}
            </div>
        </div>
    );
};

export default InsuranceCategoryCard;