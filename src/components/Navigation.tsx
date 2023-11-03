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

  @media (max-width: 840px) {
    font-size: 2.5rem;
    padding: 2rem;
  }
`;

interface NavigationProps {
  onCloseNav: () => void;
}

interface NavLinkItemsProps {
  to: string;
  Icon: IconType;
  label: string;
  onClick: () => void;
}

const NavLinkItems: FunctionComponent<NavLinkItemsProps> = ({
  to,
  Icon,
  label,
  onClick,
}) => (
  <StyledNavLinks to={to} onClick={onClick}>
    <Icon />
    <span>{label}</span>
  </StyledNavLinks>
);

export default function Navigation({ onCloseNav }: NavigationProps) {
  const navLinks: NavLinkItemsProps[] = [
    {
      to: '/',
      Icon: HiHome,
      label: 'Główna',
      onClick: onCloseNav,
    },
    {
      to: '/products',
      Icon: GiMushroomGills,
      label: 'Grzyby',
      onClick: onCloseNav,
    },
    {
      to: '/info',
      Icon: HiInformationCircle,
      label: 'Info',
      onClick: onCloseNav,
    },
    {
      to: '/user',
      Icon: HiUser,
      label: 'Użytkownik',
      onClick: onCloseNav,
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <NavLinkItems key={link.to} {...link} />
      ))}
    </>
  );
}
