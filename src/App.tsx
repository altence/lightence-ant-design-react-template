import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ThemeSwitchContext } from './context/ThemeSwitchContext';
import 'typeface-montserrat';
import 'typeface-poppins';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(theme);

  const handleThemeSwitch = (colors: DefaultTheme) => {
    setCurrentTheme((prev) => {
      return { ...prev, colors };
    });
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <ThemeSwitchContext.Provider value={handleThemeSwitch}>
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
