import React, { createContext, useState } from 'react';

export const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [showAllProducts, setShowAllProducts] = useState(false);
    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        // Here you would typically fetch data for this category
    };
    
    const toggleShowAllProducts = () => {
        setShowAllProducts(!showAllProducts);
    };

    return (
        <InsuranceContext.Provider 
            value={{ 
                activeCategory, 
                handleCategoryClick,
                showAllProducts,
                toggleShowAllProducts
            }}
        >
            {children}
        </InsuranceContext.Provider>
    );
};

export default InsuranceProvider;