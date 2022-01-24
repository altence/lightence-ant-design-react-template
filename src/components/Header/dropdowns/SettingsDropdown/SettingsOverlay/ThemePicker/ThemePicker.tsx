import React, { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { MoonSunSwitch } from '@app/components/common/MoonSunSwitch/MoonSunSwitch';
import { ThemeType } from '@app/interfaces/interfaces';
import { useNightMode } from '@app/hooks/useNightMode';

export const ThemePicker: React.FC = () => {
  const { theme: currentTheme, setTheme } = useContext(ThemeContext);
  const { setNightMode, isNightMode } = useNightMode();

  console.log(isNightMode);

  const handleClickButton = (theme: ThemeType) => {
    setTheme(theme);
    setNightMode(false);
  };

  return (
    <MoonSunSwitch
      isMoonActive={currentTheme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
