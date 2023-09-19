import React from 'react';
import { ConfigProvider, App as FeedbackProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { AppRouter } from './components/router/AppRouter';
import { useLanguage } from './hooks/useLanguage';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { useAppSelector } from './hooks/reduxHooks';
import { themeObject } from './styles/themes/themeVariables';
import { getThemeConfig } from './styles/themeConfig';

const App: React.FC = () => {
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);
  const currentTheme = themeObject[theme];
  const themeConfig = React.useMemo(() => getThemeConfig(currentTheme), [currentTheme]);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <ThemeProvider theme={currentTheme}>
      <meta name="theme-color" content={currentTheme.primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider theme={themeConfig} locale={language === 'en' ? enUS : deDe}>
          <FeedbackProvider>
            <AppRouter />
          </FeedbackProvider>
        </ConfigProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
