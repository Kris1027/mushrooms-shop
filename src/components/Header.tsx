import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { HiHome, HiInformationCircle, HiUser } from 'react-icons/hi2';
import { GiMushroomGills } from 'react-icons/gi';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 2rem;

  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledNavLinks = styled(NavLink)`
  display: flex;
  gap: 0.2rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: orange;
  }

  &.active {
    color: orange;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Hummer Mushrooms</h1>
      <StyledNav>
        <StyledNavLinks to='/'>
          <HiHome />
          <span>Strona Główna</span>
        </StyledNavLinks>
        <StyledNavLinks to='/products'>
          <GiMushroomGills />
          <span>Produkty</span>
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
    </StyledHeader>
  );
}
