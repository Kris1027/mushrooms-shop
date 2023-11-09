import { NavLink } from 'react-router-dom';
import { type FunctionComponent } from 'react';

import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiInformationCircle, HiUser } from 'react-icons/hi2';
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
  font-size: 1.5rem;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
