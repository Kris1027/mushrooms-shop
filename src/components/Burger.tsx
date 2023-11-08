import { useState } from 'react';

import { HiBars4, HiXMark } from 'react-icons/hi2';
import { styled } from 'styled-components';

import Navigation from './Navigation';

export default function Burger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenMobileMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <BurgerIcon onClick={handleOpenMobileMenu}>
        {isOpen ? <HiXMark /> : <HiBars4 />}
      </BurgerIcon>
      {isOpen && (
        <BurgerNav>
          <Navigation />
        </BurgerNav>
      )}
    </>
  );
}

const BurgerIcon = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BurgerNav = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  height: calc(100% - 72px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background: rgba(255, 255, 255, 0.27);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
