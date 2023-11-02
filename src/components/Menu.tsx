import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { type IconType } from 'react-icons';

import { HiBars4, HiHome, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { GiMushroomGills } from 'react-icons/gi';
import { FunctionComponent, useEffect, useState } from 'react';

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  }
`;

const StyledNavLinks = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #f93943;
    transform: scale(120%);
  }

  &.active {
    color: #f93943;
  }
`;

const StyledBurgerIcon = styled.div`
  font-size: 3rem;
`;

interface NavLinkItemsProps {
  to: string;
  Icon: IconType;
  label: string;
}

const NavLinkItems: FunctionComponent<NavLinkItemsProps> = ({
  to,
  Icon,
  label,
}) => (
  <StyledNavLinks to={to}>
    <Icon />
    <span>{label}</span>
  </StyledNavLinks>
);

const navLinks: NavLinkItemsProps[] = [
  { to: '/', Icon: HiHome, label: 'Główna' },
  { to: '/products', Icon: GiMushroomGills, label: 'Grzyby' },
  { to: '/info', Icon: HiInformationCircle, label: 'Info' },
  { to: '/user', Icon: HiUser, label: 'Użytkownik' },
];

const Menu: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 830);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledNav>
      {isMobile ? (
        <StyledBurgerIcon>
          <HiBars4 />
        </StyledBurgerIcon>
      ) : (
        navLinks.map((link) => <NavLinkItems key={link.to} {...link} />)
      )}
    </StyledNav>
  );
};

export default Menu;
