import { NavLink } from 'react-router-dom';
import { type FunctionComponent } from 'react';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { styled } from 'styled-components';
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
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;

  background: rgba(35, 35, 35, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const NavLinks = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;

  &.active {
    color: ${(props) => props.theme.third};
  }
`;
