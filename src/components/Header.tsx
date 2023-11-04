import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f93943;
  height: 70px;
  padding: 0 2rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}
