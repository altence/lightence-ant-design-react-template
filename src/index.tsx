import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'config/config';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { defaultTheme } from '@app/store/slices/themeSlice';

const themes = {
  dark: `${process.env.PUBLIC_URL}/themes/main-dark.css`,
  light: `${process.env.PUBLIC_URL}/themes/main-light.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={defaultTheme}
        insertionPoint={document.getElementById('inject-styles-here')}
      >
        <App />
      </ThemeSwitcherProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
