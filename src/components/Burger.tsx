import { type FunctionComponent } from 'react';
import { HiBars4, HiXMark } from 'react-icons/hi2';
import { styled } from 'styled-components';
import { useMobileMenu } from '../contexts/useMobileMenu';
import Navigation from './Navigation';

const StyledBurgerIcon = styled.div`
  font-size: 3rem;
`;

const StyledBurgerNav = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const Burger: FunctionComponent = () => {
  const { isOpen, handleOpenMobileMenu } = useMobileMenu();

  return (
    <>
      <StyledBurgerIcon onClick={handleOpenMobileMenu}>
        {isOpen ? <HiXMark /> : <HiBars4 />}
      </StyledBurgerIcon>
      {isOpen && (
        <StyledBurgerNav>
          <Navigation />
        </StyledBurgerNav>
      )}
    </>
  );
};

export default Burger;
