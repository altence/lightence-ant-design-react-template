import React from 'react';
import { ThemeType } from '@app/interfaces/interfaces';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({ theme: 'dark', setTheme: () => null });
