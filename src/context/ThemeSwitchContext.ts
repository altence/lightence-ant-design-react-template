import React from 'react';

const themeContext = {
  currentTheme: 'light',
  changeTheme: (theme: string): void | string => {
    return theme;
  },
};

export const ThemeSwitchContext = React.createContext(themeContext);
