import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';

export interface themeProps {
  primary: string;
  secondary: string;
  color: string;
  third: string;
  appBG: string;
}

const darkTheme: themeProps = {
  secondary: '#0C7C59',
  third: '#D64933',
  primary: '#BAC1B8',
  color: '#58A4B0',
  appBG: '#020202',
};

const lightTheme: themeProps = {
  primary: '#FFECD1',
  secondary: '#FF7D00',
  third: '#15616D',
  color: '#78290F',
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header switchTheme={handleTheme} theme={theme} dark={darkTheme} />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
