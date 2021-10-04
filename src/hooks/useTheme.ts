import { useEffect, useState } from 'react';

const selectedTheme = localStorage.getItem('theme');

export const useTheme = (isNightMode: boolean): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState(selectedTheme || 'light');

  const selectTheme = (theme: string): void => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    selectTheme(isNightMode ? 'dark' : 'light');
  }, [isNightMode]);

  return [theme, selectTheme];
};
