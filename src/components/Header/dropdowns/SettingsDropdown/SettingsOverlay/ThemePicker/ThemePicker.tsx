import React from 'react';
import { MoonSunSwitch } from '@app/components/common/MoonSunSwitch/MoonSunSwitch';
import { ThemeType } from '@app/interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { setTheme } from '@app/store/slices/themeSlice';
import { setNightMode } from '@app/store/slices/nightModeSlice';

export const ThemePicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleClickButton = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    dispatch(setNightMode(false));
  };

  return (
    <MoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
