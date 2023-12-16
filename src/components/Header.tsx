import { Link } from 'react-router-dom';

import { useCartSelector } from '../store/hooks';
import { type CartItem } from '../store/cartSlice';

import styled from 'styled-components';
import { HiMoon, HiShoppingCart, HiSun } from 'react-icons/hi2';

import { type themeProps } from '../styles/GlobalStyle';

import Logo from './Logo';
import Navigation from './Navigation';
import { RootState } from '../store/store';

interface HeaderProps {
  switchTheme: () => void;
  theme: themeProps;
  dark: themeProps;
}

export default function Header({ switchTheme, theme, dark }: HeaderProps) {
  const cartQuantity = useCartSelector((state: RootState) =>
    state.cart.items.reduce(
      (val: number, item: CartItem) => val + item.quantity,
      0
    )
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
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 70px;
  justify-content: space-around;
  position: relative;
  text-align: center;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(5px);
`;

const Basket = styled(Link)`
  color: ${(props) => props.theme.secondary};
  display: flex;
  gap: 0.2rem;
  text-decoration: none;
  width: 3.5rem;
`;

const Quantity = styled.span`
  color: ${(props) => props.theme.third};
  font-size: 1.3rem;
  width: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 10px;
  }
`;
