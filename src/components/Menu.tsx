import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import Burger from './Burger';
import Navigation from './Navigation';

export default function Menu() {
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

  return <Nav>{isMobile ? <Burger /> : <Navigation />}</Nav>;
}

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
