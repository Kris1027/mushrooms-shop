import styled from 'styled-components';
import { HiMoon, HiShoppingCart, HiSun } from 'react-icons/hi2';

import { themeProps } from '../App';

import Menu from './Menu';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useCartSelector } from '../store/hooks';

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
        <Basket to='/basket'>
          <HiShoppingCart />
          {cartQuantity === 0 ? null : <Quantity>{cartQuantity}</Quantity>}
        </Basket>
        <ThemeSwitcher onClick={switchTheme}>
          {theme === dark ? <HiMoon /> : <HiSun />}
        </ThemeSwitcher>
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

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const ThemeSwitcher = styled.div`
  font-size: 2rem;
`;

const Panel = styled.div`
  display: flex;
  gap: 2rem;
`;

const Basket = styled(Link)`
  display: flex;
  gap: 0.3rem;
  font-size: 2rem;
  color: red;
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
`;

const Quantity = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.third};
`;
