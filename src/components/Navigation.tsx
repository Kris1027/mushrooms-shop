import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  type Location,
} from 'react-router-dom';
import { useState, type FunctionComponent, useEffect } from 'react';

import { styled } from 'styled-components';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { IoIosMail } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';
import { FaFileCircleQuestion } from 'react-icons/fa6';

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
  const location: Location = useLocation();
  const navigation = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [OpenBurger, setOpenBurger] = useState(false);

  function handleResize() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    setOpenBurger(location.pathname === '/nav');
  }, [location]);

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
      label: 'Produkty',
    },
    {
      to: '/info',
      Icon: FaInfoCircle,
      label: 'Info',
    },
    {
      to: '/contact',
      Icon: IoIosMail,
      label: 'Kontakt',
    },
    {
      to: '/faq',
      Icon: FaFileCircleQuestion,
      label: 'FAQ',
    },
  ];

  function handleToggleMobileMenu() {
    setOpenBurger(false);
    navigation(-1);
  }

  return (
    <Nav>
      {isMobile ? (
        <>
          <Burger to='/nav'>
            {OpenBurger ? (
              <HiXMark onClick={handleToggleMobileMenu} />
            ) : (
              <HiBars3 />
            )}
          </Burger>
        </>
      ) : (
        navLinks.map((link) => <NavLinkItems key={link.to} {...link} />)
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.secondary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Burger = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
`;

const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  &.active {
    color: ${(props) => props.theme.third};
  }
`;
