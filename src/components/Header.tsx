import styled from 'styled-components';
import { HiBars4 } from 'react-icons/hi2';
import Menu from './Menu';
import { Logo } from './Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-image: url('/headerBg.jpg');
  font-family: 'Berkshire Swash', serif;
`;

const StyledBurgerIcon = styled.div`
  font-size: 1.5rem;

  @media (min-width: 830px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledBurgerIcon>
        <HiBars4 />
      </StyledBurgerIcon>
      <Menu />
    </StyledHeader>
  );
}
