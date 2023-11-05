import { type FunctionComponent, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import Burger from './Burger';
import Navigation from './Navigation';

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Menu: FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 880);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 880);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <StyledNav>{isMobile ? <Burger /> : <Navigation />}</StyledNav>;
};

export default Menu;
