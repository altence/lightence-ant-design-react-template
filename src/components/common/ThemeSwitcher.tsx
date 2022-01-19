import React, { useEffect, useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';

interface ThemeSwitcherProps {
  theme: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, children }) => {
  const { switcher, themes, status } = useThemeSwitcher();
  const [isThemesLoaded, setThemesLoaded] = useState(false);

  useEffect(() => {
    if (!isThemesLoaded && status === 'loaded') {
      setThemesLoaded(true);
      const initSpinner = document.getElementById('initSpinner');
      if (initSpinner) {
        initSpinner.style.display = 'none';
      }
    }
  }, [isThemesLoaded, setThemesLoaded, status]);

  useEffect(() => {
    switcher({ theme: theme === 'dark' ? themes.dark : themes.light });
  }, [switcher, theme, themes.dark, themes.light]);

  return <>{children}</>;
};
