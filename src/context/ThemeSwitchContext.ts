import React from 'react';
import { AppDate } from '../constants/Dates';

const themeContext = {
  currentTheme: 'light',
  changeTheme: (theme: string): void | string => {
    return theme;
  },
  changeNightTime: (time: AppDate[]): void | AppDate[] => {
    return time;
  },
  isAutoSwitchEnabled: true,
  changeAutoSwitchEnabled: (state: boolean): void | boolean => {
    return state;
  },
};

export const ThemeSwitchContext = React.createContext(themeContext);
