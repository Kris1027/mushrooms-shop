import { useState, type FunctionComponent } from 'react';
import { HiBars4, HiXMark } from 'react-icons/hi2';
import { styled } from 'styled-components';
import Navigation from './Navigation';

const StyledBurgerIcon = styled.div`
  font-size: 3rem;
`;

const StyledBurgerNav = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  height: calc(100% - 72px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-image: url('/headerBg.jpg');
  transition: transform 2s ease-in-out;
`;

const Burger: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenMobileMenu() {
    setIsOpen((prevState) => !prevState);
  }

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
