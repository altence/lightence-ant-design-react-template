import React from 'react';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({ theme: '', setTheme: () => null });
