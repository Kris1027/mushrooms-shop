import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import { GiMushroomGills } from 'react-icons/gi';
import { HiInformationCircle, HiUser } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledNavLinks = styled(NavLink)`
  display: flex;
  gap: 0.4rem;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size: 1.5rem;
  padding: 0.3rem;

  &.active {
    transform: scale(120%);
    border-bottom: 3px solid;
    background-color: black;

    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
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
