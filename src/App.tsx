import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme, { darkTheme } from './styles/theme';
import { ThemeSwitchContext } from './context/ThemeSwitchContext';
import { Dates } from './constants/Dates';
import 'typeface-montserrat';
import 'typeface-poppins';

const App: React.FC = () => {
  const localIsAutoChangeEnabled = localStorage.getItem('autoChange');
  const localTheme = localStorage.getItem('theme');
  const localNightTime = localStorage.getItem('nightTime');

  const [currentTheme, setCurrentTheme] = useState(localTheme || 'light');
  const [isAutoChangeEnabled, setAutoChangeEnabled] = useState(
    (!localIsAutoChangeEnabled && true) || JSON.parse(localIsAutoChangeEnabled),
  );
  const [nightTime, setNightTime] = useState((localNightTime && JSON.parse(localNightTime)) || [20, 6]);
  const [now, setNow] = useState(Dates.getToday().hour());

  const handleThemeSwitch = (theme: string) => {
    setCurrentTheme(theme);
  };

  const handleAutoThemeSwitch = () => {
    if (isAutoChangeEnabled) {
      if (now > nightTime[0] && now !== 0) {
        setCurrentTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else if (now >= 0 && now < nightTime[0]) {
        setCurrentTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else if (now > 0 && now < nightTime[1]) {
        setCurrentTheme('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        setCurrentTheme('light');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Dates.getToday().hour());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    handleAutoThemeSwitch();
  }, [now, nightTime, isAutoChangeEnabled]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme === 'light' ? theme : darkTheme}>
        <ThemeSwitchContext.Provider
          value={{
            currentTheme,
            changeTheme: handleThemeSwitch,
            changeNightTime: setNightTime,
            isAutoSwitchEnabled: isAutoChangeEnabled,
            changeAutoSwitchEnabled: setAutoChangeEnabled,
          }}
        >
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
