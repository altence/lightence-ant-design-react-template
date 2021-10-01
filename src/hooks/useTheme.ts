import { useState } from 'react';

interface UseThemeReturnVal {
  theme: string;
  setTheme: (theme: string) => void;
  isNightMode: boolean;
}

const selectedTheme = localStorage.getItem('theme');

export const useTheme = (): UseThemeReturnVal => {
  const [theme, setTheme] = useState(selectedTheme || 'light');

  const selectTheme = (theme: string): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const [isNightMode] = useState(false);

  return { theme, setTheme: selectTheme, isNightMode };
};
