import React from 'react';
import InsuranceCategoryCard from './InsuranceCategoryCard';

const InsuranceCategories = () => {
    const categories = [
        // First row
        {
            discount: "Upto 15% Discount",
            icon: <img src="/images/umbrella.png" alt="Term Life" className="w-16 h-16" />,
            title: "Term Life Insurance"
        },
        {
            discount: "FREE Home Visit",
            icon: <img src="/images/heart.png" alt="Health" className="w-16 h-16" />,
            title: "Health Insurance"
        },
        {
            discount: "In-Built Life Cover",
            icon: <img src="/images/investment.png" alt="Investment" className="w-16 h-16" />,
            title: "Investment Plans"
        },
        {
            discount: "Upto 91% Discount",
            icon: <img src="/images/car.png" alt="Car" className="w-16 h-16" />,
            title: "Car Insurance"
        },
        {
            discount: "Upto 85% Discount",
            icon: <img src="/images/scooter.png" alt="2 Wheeler" className="w-16 h-16" />,
            title: "2 Wheeler Insurance"
        },
        {
            discount: "Upto 25% Discount",
            icon: <img src="/images/family.png" alt="Family" className="w-16 h-16" />,
            title: "Family Health Insurance"
        },
        {
            icon: <img src="/images/travel.png" alt="Travel" className="w-16 h-16" />,
            title: "Travel Insurance"
        },
        
        // Second row
        {
            discount: "Upto 20% Cheaper",
            icon: <img src="/images/woman.png" alt="Term Women" className="w-16 h-16" />,
            title: "Term Insurance (Women)"
        },
        {
            icon: <img src="/images/return-premium.png" alt="Term Plans" className="w-16 h-16" />,
            title: "Term Plans with Return of Premium"
        },
        {
            icon: <img src="/images/guaranteed.png" alt="Guaranteed Return" className="w-16 h-16" />,
            title: "Guaranteed Return Plans"
        },
        {
            discount: "Premium Waiver",
            icon: <img src="/images/child.png" alt="Child Savings" className="w-16 h-16" />,
            title: "Child Savings Plans"
        },
        {
            icon: <img src="/images/retirement.png" alt="Retirement" className="w-16 h-16" />,
            title: "Retirement Plans"
        },
        {
            discount: "Upto 65% Discount",
            icon: <img src="/images/employee.png" alt="Employee Group" className="w-16 h-16" />,
            title: "Employee Group Health Insurance"
        },
        {
            discount: "Upto 25% Discount",
            icon: <img src="/images/home.png" alt="Home" className="w-16 h-16" />,
            title: "Home Insurance"
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
                <InsuranceCategoryCard 
                    key={index}
                    discount={category.discount}
                    icon={category.icon}
                    title={category.title}
                />
            ))}
        </div>
    );
};

export default InsuranceCategories;