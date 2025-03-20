import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

// Import icons
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const Tagline = styled.div`
  font-size: 0.75rem;
  background-color: #002E5D;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  margin-left: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 0.75rem;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  color: ${theme.textPrimary};
  font-weight: 500;
  
  &:hover {
    color: ${theme.primary};
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 100;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${theme.textPrimary};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${theme.background};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
  color: ${props => props.color || theme.primary};
`;

const CallButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
  
  &:hover {
    background-color: #f0f7ff;
  }
`;

const SignInButton = styled.button`
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #003d7a;
  }
`;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const insuranceProducts = [
    { name: 'Term Life Insurance', icon: '🛡️' },
    { name: 'Health Insurance', icon: '❤️' },
    { name: 'Car Insurance', icon: '🚗' },
    { name: 'Two Wheeler Insurance', icon: '🏍️' },
    { name: 'Travel Insurance', icon: '✈️' },
    { name: 'Home Insurance', icon: '🏠' }
  ];
  
  const renewOptions = [
    { name: 'Term Life Renewal', icon: '☂️', color: '#5b6bff' },
    { name: 'Investment Renewal', icon: '🪙', color: '#ff9d42' },
    { name: 'Health Renewal', icon: '❤️', color: '#ff5757' },
    { name: 'Motor Renewal', icon: '🚗', color: '#3e7aff' },
    { name: 'Two Wheeler Renewal', icon: '🏍️', color: '#8f44fd' },
    { name: 'Home Insurance', icon: '🏠', color: '#42c9ff' }
  ];
  
  const claimOptions = [
    { name: 'File a New Claim', icon: '📝' },
    { name: 'Track Your Claim', icon: '🔎' },
    { name: 'Claim Guidelines', icon: '📋' }
  ];
  
  const supportOptions = [
    { name: 'Contact Us', icon: '📞' },
    { name: 'FAQs', icon: '❓' },
    { name: 'Raise a Ticket', icon: '🎫' },
    { name: 'Service Centers', icon: '🏢' }
  ];
  
  return (
    <NavbarContainer>
      <Logo >
        <LogoImage src="/image/logo.png" alt="PolicyBazaar" />
       
      </Logo>
      
      <NavLinks>
        <NavItem 
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink>
            Insurance Products
            {activeDropdown === 'products' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </NavLink>
          <DropdownContainer isOpen={activeDropdown === 'products'}>
            {insuranceProducts.map((item, index) => (
              <DropdownItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownContainer>
        </NavItem>
        
        <NavItem 
          onMouseEnter={() => handleMouseEnter('renew')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink>
            Renew Your Policy
            {activeDropdown === 'renew' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </NavLink>
          <DropdownContainer isOpen={activeDropdown === 'renew'}>
            {renewOptions.map((item, index) => (
              <DropdownItem key={index}>
                <IconWrapper color={item.color}>{item.icon}</IconWrapper>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownContainer>
        </NavItem>
        
        <NavItem 
          onMouseEnter={() => handleMouseEnter('claim')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink>
            Claim
            {activeDropdown === 'claim' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </NavLink>
          <DropdownContainer isOpen={activeDropdown === 'claim'}>
            {claimOptions.map((item, index) => (
              <DropdownItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownContainer>
        </NavItem>
        
        <NavItem 
          onMouseEnter={() => handleMouseEnter('support')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink>
            Support
            {activeDropdown === 'support' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </NavLink>
          <DropdownContainer isOpen={activeDropdown === 'support'}>
            {supportOptions.map((item, index) => (
              <DropdownItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownContainer>
        </NavItem>
        
        <CallButton>
          <Phone size={16} style={{ marginRight: '0.5rem' }} />
          Talk to Expert
        </CallButton>
        
        <SignInButton>Sign in</SignInButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;