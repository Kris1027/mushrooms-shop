import { useCartSelector } from '../store/hooks';

import styled from 'styled-components';
import { HiMoon, HiShoppingCart, HiSun } from 'react-icons/hi2';

import { type themeProps } from '../App';

import Menu from './Menu';
import Logo from './Logo';
import { Link } from 'react-router-dom';

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
      <Panel>
        <Menu />
        <Basket to='/cart'>
          <HiShoppingCart />
          {cartQuantity === 0 ? null : <Quantity>{cartQuantity}</Quantity>}
        </Basket>
        <div onClick={switchTheme}>
          {theme === dark ? <HiMoon /> : <HiSun />}
        </div>
      </Panel>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 2rem;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const Panel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
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
