import { NavLink } from 'react-router-dom';
import { type FunctionComponent } from 'react';

import { styled } from 'styled-components';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { FaInfoCircle } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
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
export default function MobileNav() {
  return (
    <Nav>
      {navLinks.map((link) => (
        <NavLinkItems key={link.to} {...link} />
      ))}
    </Nav>
  );
}

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 80vh;
  justify-content: space-around;

  background: rgba(35, 35, 35, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(5px);
`;

const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  text-decoration: none;

  &.active {
    color: ${(props) => props.theme.third};
  }
`;
