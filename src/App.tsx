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
import { useLanguage } from './hooks/useLanguage';

const App: React.FC = () => {
  const { isNightMode, setNightMode, nightTime, setNightTime } = useNightMode();
  const [theme, setTheme] = useTheme(isNightMode, nightTime);

  const currentLanguage = useLanguage();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? lightTheme : lightTheme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <NightModeContext.Provider value={{ isNightMode, setNightMode, nightTime, setNightTime }}>
            <ConfigProvider locale={currentLanguage === 'en' ? enUS : deDe}>
              <BrowserRouter>
                <Switch>
                  {routes.map((route, index) => (
                    <Route {...route} key={index} />
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
