import { useState } from 'react';

import { HiBars4, HiXMark } from 'react-icons/hi2';
import { styled } from 'styled-components';

import Navigation from './Navigation';

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenMobileMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function handleCloseMobileMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <BurgerIcon onClick={handleOpenMobileMenu}>
        {isOpen ? <HiXMark /> : <HiBars4 />}
      </BurgerIcon>
      {isOpen && (
        <BurgerNav>
          <Navigation closeMenu={handleCloseMobileMenu} />
        </BurgerNav>
      )}
    </>
  );
}

const BurgerIcon = styled.div`
  font-size: 2rem;
`;

const BurgerNav = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 5rem;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;

  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
