import { NavLink } from 'react-router-dom';
import { useState, type FunctionComponent, useEffect } from 'react';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiBars3, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { styled } from 'styled-components';

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
  <NavLinks to={to}>
    <Icon />
    <span>{label}</span>
  </NavLinks>
);

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  function handleResize() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(function () {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks: NavLinkItemsProps[] = [
    {
      to: '/products',
      Icon: GiMushroomGills,
      label: 'Grzyby',
    },
    {
      to: '/info',
      Icon: HiInformationCircle,
      label: 'Info',
    },
    {
      to: '/user',
      Icon: HiUser,
      label: 'Użytkownik',
    },
  ];

  return (
    <Nav>
      {isMobile ? (
        <Burger />
      ) : (
        navLinks.map((link) => <NavLinkItems key={link.to} {...link} />)
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  font-size: 1.5rem;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Burger = styled(HiBars3)`
  font-size: 2rem;
`;

const NavLinks = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};

  &.active {
    color: ${(props) => props.theme.third};
  }
`;
