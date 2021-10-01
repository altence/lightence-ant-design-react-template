import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import lightTheme, { darkTheme } from './styles/theme';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-poppins';
import 'typeface-montserrat';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Switch>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Switch>
          </BrowserRouter>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
