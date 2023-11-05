import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiInformationCircle, HiUser } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

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
  <NavLinks to={to}>
    <Icon />
    <span>{label}</span>
  </NavLinks>
);

export default function Navigation() {
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
    <>
      {navLinks.map((link) => (
        <NavLinkItems key={link.to} {...link} />
      ))}
    </>
  );
}
