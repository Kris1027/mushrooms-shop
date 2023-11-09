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
  onClick: () => void;
}

const NavLinkItems: FunctionComponent<NavLinkItemsProps> = ({
  to,
  Icon,
  label,
  onClick,
}) => (
  <NavLinks to={to} onClick={onClick}>
    <Icon />
    <span>{label}</span>
  </NavLinks>
);

export default function Navigation({ closeMenu }) {
  const navLinks: NavLinkItemsProps[] = [
    {
      to: '/products',
      Icon: GiMushroomGills,
      label: 'Grzyby',
      onClick: closeMenu,
    },
    {
      to: '/info',
      Icon: HiInformationCircle,
      label: 'Info',
      onClick: closeMenu,
    },
    {
      to: '/user',
      Icon: HiUser,
      label: 'Użytkownik',
      onClick: closeMenu,
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <NavLinkItems key={link.to} {...link} onClick={closeMenu} />
      ))}
    </>
  );
}

const NavLinks = styled(NavLink)`
  display: flex;
  gap: 0.4rem;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size: 1.5rem;
  padding: 0.3rem;

  &.active {
    transform: scale(120%);
    color: ${(props) => props.theme.third};
  }

  @media (max-width: 890px) {
    font-size: 3rem;
  }
`;
