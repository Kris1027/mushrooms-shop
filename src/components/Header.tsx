import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-image: url('/headerBg.jpg');
  font-family: 'Berkshire Swash', serif;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
}
