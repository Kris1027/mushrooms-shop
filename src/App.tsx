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
