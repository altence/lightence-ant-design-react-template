import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import 'typeface-montserrat';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <Route {...route} key={index} />
            ))}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
