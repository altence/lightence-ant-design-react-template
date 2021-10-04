import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import { NightModeContext } from './context/NightModeContext';
import lightTheme, { darkTheme } from './styles/theme';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-poppins';
import 'typeface-montserrat';
import { useTheme } from './hooks/useTheme';
import { useNightMode } from './hooks/useNightMode';

const App: React.FC = () => {
  const { isNightMode, setNightMode, nightTime, setNightTime } = useNightMode();
  const [theme, setTheme] = useTheme(isNightMode, nightTime);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <NightModeContext.Provider value={{ isNightMode, setNightMode, nightTime, setNightTime }}>
            <BrowserRouter>
              <Switch>
                {routes.map((route, index) => (
                  <Route {...route} key={index} />
                ))}
              </Switch>
            </BrowserRouter>
          </NightModeContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
