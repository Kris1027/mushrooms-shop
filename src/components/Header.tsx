import { Link } from 'react-router-dom';
import { useCartSelector } from '../store/hooks';

import styled from 'styled-components';
import { HiMoon, HiShoppingCart, HiSun } from 'react-icons/hi2';

import { type themeProps } from '../App';

import Logo from './Logo';
import Navigation from './Navigation';

interface HeaderProps {
  switchTheme: () => void;
  theme: themeProps;
  dark: themeProps;
}

export default function Header({ switchTheme, theme, dark }: HeaderProps) {
  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );

  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
      <Basket to='/cart'>
        <HiShoppingCart />
        {cartQuantity === 0 ? null : <Quantity>{cartQuantity}</Quantity>}
      </Basket>
      <div onClick={switchTheme}>{theme === dark ? <HiMoon /> : <HiSun />}</div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  font-size: 1.5rem;
  text-align: center;

  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Basket = styled(Link)`
  display: flex;
  gap: 0.3rem;

  color: red;
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
`;

const Quantity = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.third};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
