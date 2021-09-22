import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitchContext } from '../../../../context/ThemeSwitchContext';
import { Switch } from 'antd';
import { AutoThemePicker } from './AutoThemePicker/AutoThemePicker';
import * as S from './ThemePicker.styles';

export const ThemePicker: React.FC = () => {
  const { currentTheme, changeTheme } = useContext(ThemeSwitchContext);

  const [isChecked, setChecked] = useState(currentTheme === 'dark' ? true : false);

  const { t } = useTranslation();

  useEffect(() => {
    if (currentTheme === 'dark') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  });

  const handleSwitch = (value: boolean) => {
    if (value && currentTheme !== 'dark') {
      changeTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (!value && currentTheme !== 'light') {
      changeTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <S.SwitchWrapper>
      <Switch
        checked={isChecked}
        checkedChildren={t('common.darkTheme')}
        unCheckedChildren={t('common.lightTheme')}
        onChange={handleSwitch}
      />
      <AutoThemePicker />
    </S.SwitchWrapper>
  );
};
