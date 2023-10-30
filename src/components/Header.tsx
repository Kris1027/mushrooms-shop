import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  background-color: gray;
  gap: 2rem;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink to='/'>Strona Główna</StyledLink>
      <StyledLink to='/user'>Użytkownik</StyledLink>
      <StyledLink to='/info'>Info</StyledLink>
      <StyledLink to='/products'>Produkty</StyledLink>
    </StyledHeader>
  );
}
