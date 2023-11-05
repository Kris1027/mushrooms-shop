import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { themeProps } from '../App';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.primary};
  height: 70px;
  padding: 0 2rem;
`;

const StyledThemeSwitcher = styled.div`
  font-size: 2rem;
`;

interface HeaderProps {
  switchTheme: () => void;
  theme: themeProps;
  dark: themeProps;
}

export default function Header({ switchTheme, theme, dark }: HeaderProps) {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <StyledThemeSwitcher onClick={switchTheme}>
        {theme === dark ? <HiMoon /> : <HiSun />}
      </StyledThemeSwitcher>
    </StyledHeader>
  );
}
