import { useEffect, useState } from 'react';

interface UseThemeReturnVal {
  theme: string;
  setTheme: (theme: string) => void;
}

const selectedTheme = localStorage.getItem('theme');

export const useTheme = (isNightMode: boolean): UseThemeReturnVal => {
  const [theme, setTheme] = useState(selectedTheme || 'light');

  const selectTheme = (theme: string): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    selectTheme(isNightMode ? 'dark' : 'light');
  }, [isNightMode]);

  return { theme, setTheme: selectTheme };
};
