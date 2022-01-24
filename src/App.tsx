import React from 'react';
import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import lightTheme from './styles/themes/light/lightTheme';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import { useTheme } from './hooks/useTheme';
import { useNightMode } from './hooks/useNightMode';
import { darkTheme } from '@app/styles/themes/dark/darkTheme';
import { AppRouter } from './components/router/AppRouter';
import { ThemeSwitcher } from '@app/components/common/ThemeSwitcher';
import { useLanguage } from './hooks/useLanguage';

const App: React.FC = () => {
  const { isNightMode, nightTime } = useNightMode();
  const [theme, setTheme] = useTheme(isNightMode, nightTime);
  const { language } = useLanguage();

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ConfigProvider locale={language === 'en' ? enUS : deDe}>
            <ThemeSwitcher theme={theme}>
              <AppRouter />
            </ThemeSwitcher>
          </ConfigProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
