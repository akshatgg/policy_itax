import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';


// Styled components for layout and animations
const InsuranceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 1.5rem auto;
  gap: 1.5rem;
`;

const CategoriesRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryBox = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: ${({ active }) => (active ? `linear-gradient(135deg, ${theme.primary}10, ${theme.primary}20)` : theme.background)};
  border: 1px solid ${({ active }) => (active ? theme.primary : '#ddd')};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ active }) => (active ? `0 6px 12px ${theme.primary}20` : '0 2px 4px rgba(0, 0, 0, 0.05)')};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    background: ${`${theme.primary}10`};
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
    color: ${theme.primary};
  }

  p {
    color: ${theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const ExpandedPanel = styled.div`
  width: 100%;
  margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '2000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
`;

const ProductItem = styled.div`
  padding: 1.25rem;
  border-radius: 8px;
  background-color: ${theme.background};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #eee;
  
  &:hover {
    background-color: white;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    border-color: ${theme.primary}30;
  }
`;

const DiscountTag = styled.div`
  background-color: ${theme.accent};
  color: gray;
  font-size: 0.6rem;
  
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
  align-self: center;
`;

const IconPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.primary}15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: ${theme.primary};
`;

const ProductTitle = styled.h3`
  font-size: 0.95rem;
  margin-top: 0.5rem;
  color: ${theme.textPrimary};
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  background-color: ${theme.background};

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: ${theme.secondary};
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.textSecondary};
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.error};
  }
`;

const Insurance = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Insurance product data
  const insuranceProducts = {
    general: [
      {
        discount: "Upto 25% Discount",
        icon: "heart",
        title: "Health Insurance"
      },
      {
        discount: "Upto 91% Discount",
        icon: "car",
        title: "Car Insurance"
      },
      {
        discount: "Upto 85% Discount",
        icon: "scooter",
        title: "2 Wheeler Insurance"
      },
      {
        discount: "Upto 25% Discount",
        icon: "family",
        title: "Family Health Insurance"
      },
      {
        icon: "travel",
        title: "Travel Insurance"
      },
      {
        discount: "Upto 65% Discount",
        icon: "employee",
        title: "Employee Group Health Insurance"
      },
      {
        discount: "Upto 25% Discount",
        icon: "home",
        title: "Home Insurance"
      }
    ],
    life: [
      {
        discount: "Upto 15% Discount",
        icon: "umbrella",
        title: "Term Life Insurance"
      },
      {
        discount: "In-Built Life Cover",
        icon: "investment",
        title: "Investment Plans"
      },
      {
        discount: "Upto 20% Cheaper",
        icon: "woman",
        title: "Term Insurance (Women)"
      },
      {
        icon: "return-premium",
        title: "Term Plans with Return of Premium"
      },
      {
        icon: "guaranteed",
        title: "Guaranteed Return Plans"
      },
      {
        discount: "Premium Waiver",
        icon: "child",
        title: "Child Savings Plans"
      },
      {
        icon: "retirement",
        title: "Retirement Plans"
      }
    ]
  };

  // Get icon representation (placeholder in this case since we don't have the actual images)
  const getIconElement = (iconName) => {
    const iconMap = {
      heart: "♥",
      car: "🚗",
      scooter: "🛵",
      family: "👪",
      travel: "✈️",
      employee: "👥",
      home: "🏠",
      umbrella: "☂️",
      investment: "📈",
      woman: "👩",
      "return-premium": "💰",
      guaranteed: "✓",
      child: "👶",
      retirement: "🏖️"
    };

    return (
      <IconPlaceholder>
        {iconMap[iconName] || "📄"}
      </IconPlaceholder>
    );
  };

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <InsuranceContainer>
      <CategoriesRow>
        <CategoryBox 
          active={activeCategory === 'general'} 
          onClick={() => toggleCategory('general')}
        >
          <h2>General Insurance</h2>
          <p>Protect your assets and health with our coverage options</p>
        </CategoryBox>

        <CategoryBox 
          active={activeCategory === 'life'} 
          onClick={() => toggleCategory('life')}
        >
          <h2>Life Insurance</h2>
          <p>Secure your family's future with reliable life plans</p>
        </CategoryBox>
      </CategoriesRow>

      <ExpandedPanel isOpen={activeCategory === 'general'}>
        <HeaderBar>
          <h2>General Insurance Products</h2>
          <CloseButton onClick={() => setActiveCategory(null)}>&times;</CloseButton>
        </HeaderBar>
        <ProductsGrid>
          {insuranceProducts.general.map((product, index) => (
            <ProductItem key={`general-${index}`}>
              {product.discount && <DiscountTag>{product.discount}</DiscountTag>}
              {getIconElement(product.icon)}
              <ProductTitle>{product.title}</ProductTitle>
            </ProductItem>
          ))}
        </ProductsGrid>
      </ExpandedPanel>

      <ExpandedPanel isOpen={activeCategory === 'life'}>
        <HeaderBar>
          <h2>Life Insurance Products</h2>
          <CloseButton onClick={() => setActiveCategory(null)}>&times;</CloseButton>
        </HeaderBar>
        <ProductsGrid>
          {insuranceProducts.life.map((product, index) => (
            <ProductItem key={`life-${index}`}>
              {product.discount && <DiscountTag>{product.discount}</DiscountTag>}
              {getIconElement(product.icon)}
              <ProductTitle>{product.title}</ProductTitle>
            </ProductItem>
          ))}
        </ProductsGrid>
      </ExpandedPanel>
    </InsuranceContainer>
  );
};

export default Insurance;