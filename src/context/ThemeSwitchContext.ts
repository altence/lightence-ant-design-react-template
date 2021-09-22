import React from 'react';

const themeContext = {
  currentTheme: 'light',
  changeTheme: (theme: string): void | string => {
    return theme;
  },
  changeNightTime: (time: [number, number]): void | [number, number] => {
    return time;
  },
  isAutoSwitchEnabled: true,
  changeAutoSwitchEnabled: (state: boolean): void | boolean => {
    return state;
  },
};

export const ThemeSwitchContext = React.createContext(themeContext);
