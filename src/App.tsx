import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeSwitchContext } from './context/ThemeSwitchContext';
import { getTheme } from './helpers/getTheme';
import { initialNightTime } from './constants/initialNightTime';
import { AppDate, Dates } from './constants/Dates';
import theme, { darkTheme } from './styles/theme';
import { routes } from './routes/routes';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-poppins';
import 'typeface-montserrat';

const App: React.FC = () => {
  const localIsAutoChangeEnabled = localStorage.getItem('autoChange');
  const localTheme = localStorage.getItem('theme');
  const localNightTime = localStorage.getItem('nightTime');

  const [currentTheme, setCurrentTheme] = useState(localTheme || 'light');
  const [isAutoChangeEnabled, setAutoChangeEnabled] = useState(
    (!localIsAutoChangeEnabled && true) || JSON.parse(localIsAutoChangeEnabled),
  );
  const [nightTime, setNightTime] = useState<AppDate[]>(
    (localNightTime && JSON.parse(localNightTime).map((el: string) => Dates.getDate(el))) || initialNightTime,
  );
  const [now, setNow] = useState(Dates.getToday());

  const handleThemeSwitch = (theme: string) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setNow(Dates.getToday());
    }, 60000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (isAutoChangeEnabled) {
      getTheme(nightTime[0], nightTime[1], now) === 'light' ? setCurrentTheme('light') : setCurrentTheme('dark');
    }
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
