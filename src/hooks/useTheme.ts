import { useState } from 'react';

interface UseThemeReturnVal {
  theme: string;
  setTheme: (theme: string) => void;
  isNightMode: boolean;
}
export const useTheme = (): UseThemeReturnVal => {
  const [theme, setTheme] = useState('light');

  const [isNightMode] = useState(false);

  return { theme, setTheme, isNightMode };
};
