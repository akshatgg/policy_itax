import React from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

// Import icons (you'll need to install the appropriate icon library)
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #001428 0%, #00264d 100%);
  color: white;
  padding: 2rem 10%;
`;

const MenuSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const MenuColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`;

const MenuTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
  }
`;

const PlusIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const InfoSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
`;

const PaymentSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const PaymentMethodsContainer = styled.div`
  flex: 2;
  min-width: 300px;
`;

const SecuredContainer = styled.div`
  flex: 1;
  min-width: 150px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialContainer = styled.div`
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h4`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PaymentIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PaymentBox = styled.div`
  background-color: #1a3c5e;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PaymentIcon = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  background-color: #505a74;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${theme.primary};
  }
`;

const LegalSection = styled.div`
  font-size: 0.8rem;
  color: #adb5bd;
  line-height: 1.5;
`;

const LegalInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CircleIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  color: #adb5bd;
  flex-shrink: 0;
`;

const LegalText = styled.p`
  margin: 0 0 0.7rem 0;
`;

const Warning = styled.div`
  color: #dc3545;
  margin: 1rem 0;
  font-weight: bold;
`;

const Copyright = styled.div`
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MenuSection>
        <MenuColumn>
          <MenuTitle>Insurance</MenuTitle>
          <MenuList>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">General Insurance</MenuLink>
            </MenuItem>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">Life Insurance</MenuLink>
            </MenuItem>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">Term Insurance</MenuLink>
            </MenuItem>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">Investment</MenuLink>
            </MenuItem>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">Health Insurance</MenuLink>
            </MenuItem>
            <MenuItem>
              <PlusIcon>+</PlusIcon>
              <MenuLink href="#">Other Insurance</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuColumn>

        <MenuColumn>
          <MenuTitle>Calculators</MenuTitle>
          <MenuList>
            <MenuItem>
              <MenuLink href="#">SIP Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Income Tax Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Compound Interest Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">NPS Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Term Insurance Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">HLV Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Life Insurance Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Health Insurance Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Travel Insurance Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Car Insurance Calculator</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Bike Insurance Calculator</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuColumn>

        <MenuColumn>
          <MenuTitle>Resources</MenuTitle>
          <MenuList>
            <MenuItem>
              <MenuLink href="#">Articles</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Customer reviews</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Insurance companies</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Newsroom</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Awards</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">PB Life</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuColumn>

        <MenuColumn>
          <MenuTitle>Company</MenuTitle>
          <MenuList>
            <MenuItem>
              <MenuLink href="#">About Us</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Sitemap</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Careers</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Legal & Admin policies</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">ISNP</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Contact us</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Verify your advisor</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">Investor Relations</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuColumn>
      </MenuSection>

      <InfoSection>
        <PaymentBox>
          <PaymentMethodsContainer>
            <SectionTitle>Payment Methods</SectionTitle>
            <PaymentIcons>
              <PaymentIcon>
                <img src='/image/pay.avif' alt="American Express" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/image/pay.avif" alt="Visa" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/image/pay.avif" alt="Paytm" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/image/pay.avif" alt="RuPay" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/image/pay.avif" alt="Net Banking" />
              </PaymentIcon>
              <PaymentIcon>
                <img src="/image/pay.avif" alt="Mastercard" />
              </PaymentIcon>
            </PaymentIcons>
          </PaymentMethodsContainer>

          <SecuredContainer>
            <SectionTitle>Secured With</SectionTitle>
            <img src="/image/pay.avif" alt="PCI DSS Secured" />
          </SecuredContainer>

          <SocialContainer>
            <SectionTitle>Follow us on</SectionTitle>
            <SocialIcons>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="YouTube">
                <Youtube size={18} />
              </SocialIcon>
            </SocialIcons>
          </SocialContainer>
        </PaymentBox>

        <LegalSection>
          <LegalInfo>
            <CircleIcon>•</CircleIcon>
            <LegalText>
              Policybazaar Insurance Brokers Private Limited CIN: U74999HR2014PTC053454 Registered Office - Plot No.119, Sector - 44, Gurugram - 122001, Haryana Tel no. : 0124-4218302 Email ID: enquiry@policybazaar.com
            </LegalText>
          </LegalInfo>

          <LegalInfo>
            <CircleIcon>•</CircleIcon>
            <LegalText>
              Policybazaar is registered as a Composite Broker | Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2027, License category: Composite Broker
            </LegalText>
          </LegalInfo>

          <LegalInfo>
            <CircleIcon>•</CircleIcon>
            <LegalText>
              Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers.
            </LegalText>
          </LegalInfo>

          <LegalInfo>
            <CircleIcon>•</CircleIcon>
            <div>
              <LegalText>
                IRDAI or its officials do not involve in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
              </LegalText>
            </div>
          </LegalInfo>
              <Warning>BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS / FRAUDULENT OFFERS</Warning>
        </LegalSection>

        <Copyright>
          © Copyright 2008-{new Date().getFullYear()} policybazaar.com. All Rights Reserved.
        </Copyright>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;