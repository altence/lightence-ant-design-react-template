import React from 'react';
import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import { NightModeContext } from './context/NightModeContext';
import lightTheme from './styles/theme';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-poppins';
import 'typeface-montserrat';
import { useTheme } from './hooks/useTheme';
import { useNightMode } from './hooks/useNightMode';
import { useTranslation } from 'react-i18next';
import { darkTheme } from 'styles/darkTheme';

const App: React.FC = () => {
  const { isNightMode, setNightMode, nightTime, setNightTime } = useNightMode();
  const [theme, setTheme] = useTheme(isNightMode, nightTime);

  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <NightModeContext.Provider value={{ isNightMode, setNightMode, nightTime, setNightTime }}>
            <ConfigProvider locale={i18n.language === 'en' ? enUS : deDe}>
              <BrowserRouter>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      exact={route.subRoutes.some((r) => r.exact)}
                      path={route.subRoutes.map((r) => r.path)}
                    >
                      <route.layout>
                        {route.subRoutes.map((subRoute, index) => (
                          <Route key={index} {...subRoute} />
                        ))}
                      </route.layout>
                    </Route>
                  ))}
                </Switch>
              </BrowserRouter>
            </ConfigProvider>
          </NightModeContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
