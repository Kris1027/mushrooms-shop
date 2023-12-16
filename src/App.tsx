import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';

import { type DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle, { darkTheme, lightTheme } from './styles/GlobalStyle';

import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

  function handleTheme() {
    setTheme((currentTheme: DefaultTheme) =>
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
