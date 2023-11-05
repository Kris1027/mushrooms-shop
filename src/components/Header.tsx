import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { themeProps } from '../App';

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

interface HeaderProps {
  switchTheme: () => void;
  theme: themeProps;
  dark: themeProps;
}

export default function Header({ switchTheme, theme, dark }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo />
      <Panel>
        <Menu />
        <ThemeSwitcher onClick={switchTheme}>
          {theme === dark ? <HiMoon /> : <HiSun />}
        </ThemeSwitcher>
      </Panel>
    </HeaderWrapper>
  );
}
