import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { HiHome, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { GiMushroomGills } from 'react-icons/gi';

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 830px) {
    display: none;
  }
`;

const StyledNavLinks = styled(NavLink)`
  display: flex;
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

export default function Menu() {
  return (
    <StyledNav>
      <StyledNavLinks to='/'>
        <HiHome />
        <span>Główna</span>
      </StyledNavLinks>
      <StyledNavLinks to='/products'>
        <GiMushroomGills />
        <span>Grzyby</span>
      </StyledNavLinks>
      <StyledNavLinks to='/info'>
        <HiInformationCircle />
        <span>Info</span>
      </StyledNavLinks>
      <StyledNavLinks to='/user'>
        <HiUser />
        <span>Użytkownik</span>
      </StyledNavLinks>
    </StyledNav>
  );
}
