import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiHome, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledNavLinks = styled(NavLink)`
  display: flex;
  gap: 0.3rem;
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

export default function Navigation() {
  return (
    <>
      {navLinks.map((link) => (
        <NavLinkItems key={link.to} {...link} />
      ))}
    </>
  );
}
