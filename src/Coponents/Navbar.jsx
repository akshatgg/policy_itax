import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

// Import icons
import { ChevronDown, ChevronUp, Phone, Settings, FileText } from 'lucide-react';

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

const CallButtonContainer = styled.div`
  position: relative;
`;

const CallButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f7ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SlideButton = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 1px;
  padding: 1.2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: none;
  z-index: 100;
  animation: fadeIn 0.3s ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;

    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background-color: white;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
  }

  ${CallButtonContainer}:hover & {
    display: block;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    padding: 0.4rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: #f5f9ff;
      transform: translateX(5px);
    }

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      margin-right: 0.8rem;
      color: ${theme.primary};
      min-width: 22px;
    }
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${theme.textPrimary};
  }

  span {
    font-weight: bold;
    color: ${theme.primary};
    display: block;
    margin-top: 2px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
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
        
        <CallButtonContainer>
          <CallButton>
            <Phone size={16} style={{ marginRight: '0.5rem' }} />
            Talk to Expert
          </CallButton>
          <SlideButton>
            <div>
              <Phone size={22} color={theme.primary} />
              <div className='flex flex-col'>
                <p>Buying a new policy</p>
                <span>1800-208-8787</span>
              </div>
            </div>
            <hr style={{ border: "0.5px solid #D3D3D3", width: "100%",marginBottom:"5%" }} />
            <div>
              <Settings size={22} color={theme.primary} />
              <div className='flex flex-col'>
                <p>Existing policy support</p>
                <span>1800-258-5970</span>
              </div>
            </div>


            <hr style={{ border: "0.5px solid #D3D3D3", width: "100%",marginBottom:"5%" }} />


            <div>
              <FileText size={22} color={theme.primary} />
              <div className='flex flex-col'>
                <p>Claims assistance</p>
                <span>1800-258-5881</span>
              </div>
            </div>
          </SlideButton>
        </CallButtonContainer>
        
        <SignInButton>Sign in</SignInButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;