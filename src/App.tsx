import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme, { darkTheme } from './styles/theme';
import { ThemeSwitchContext } from './context/ThemeSwitchContext';
import 'typeface-montserrat';
import 'typeface-poppins';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleThemeSwitch = (theme: string) => {
    setCurrentTheme(theme);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme === 'light' ? theme : darkTheme}>
        <ThemeSwitchContext.Provider value={{ currentTheme, changeTheme: handleThemeSwitch }}>
          <BrowserRouter>
            <Switch>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Switch>
          </BrowserRouter>
        </ThemeSwitchContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
