import React, { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { MoonSunSwitch } from '@app/components/common/MoonSunSwitch/MoonSunSwitch';

export const ThemePicker: React.FC = () => {
  const { theme: currentTheme, setTheme } = useContext(ThemeContext);

  return (
    <MoonSunSwitch
      isMoonActive={currentTheme === 'dark'}
      onClickMoon={() => setTheme('dark')}
      onClickSun={() => setTheme('light')}
    />
  );
};
