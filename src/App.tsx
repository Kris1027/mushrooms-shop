import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 50;
`;

export interface themeProps {
  primary: string;
  secondary: string;
  third: string;
  appBG: string;
}

const darkTheme: themeProps = {
  primary: '#2E282A',
  secondary: '#FFEEDB',
  third: '#F1D302',
  appBG: '#020202',
};

const lightTheme: themeProps = {
  primary: '#F1D302',
  secondary: '#FFEEDB',
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
      <Wrapper>
        <Header switchTheme={handleTheme} theme={theme} dark={darkTheme} />
        <Outlet />
        <Footer theme={theme} dark={darkTheme} />
      </Wrapper>
    </ThemeProvider>
  );
}
