import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 1280px;
  min-width: 400px;
  margin: 0 auto;
`;

export interface themeProps {
  primary: string;
  secondary: string;
  third: string;
  appBG: string;
}

const darkTheme: themeProps = {
  primary: '#2E282A',
  secondary: '#FDFFFC',
  third: '#F1D302',
  appBG: '#020202',
};

const lightTheme: themeProps = {
  primary: '#F1D302',
  secondary: '#020202',
  third: '#f93943',
  appBG: '#FFEEDB',
};

export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  function handleTheme() {
    setTheme((currentTheme) =>
      currentTheme === darkTheme ? lightTheme : darkTheme
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledWrapper>
        <Header switchTheme={handleTheme} theme={theme} dark={darkTheme} />
        <Outlet />
        <Footer theme={theme} dark={darkTheme} />
      </StyledWrapper>
    </ThemeProvider>
  );
}
