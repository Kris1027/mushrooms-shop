import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, type FunctionComponent, useEffect } from 'react';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { IoIosMail } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';
import { FaFileCircleQuestion } from 'react-icons/fa6';
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
  const location = useLocation();
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
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: ${(props) => props.theme.secondary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Burger = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
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
