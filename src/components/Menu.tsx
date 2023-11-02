import { type FunctionComponent, useEffect, useState } from 'react';
import { type IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { HiHome, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { GiMushroomGills } from 'react-icons/gi';

import Burger from './Burger';

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
        <Burger />
      ) : (
        navLinks.map((link) => <NavLinkItems key={link.to} {...link} />)
      )}
    </StyledNav>
  );
};

export default Menu;
