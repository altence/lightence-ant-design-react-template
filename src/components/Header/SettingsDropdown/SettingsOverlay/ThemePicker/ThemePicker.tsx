import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../../context/ThemeContext';
import { Switch } from 'antd';
import * as S from './ThemePicker.styles';

export const ThemePicker: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onChange = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const { t } = useTranslation();

  return (
    <S.SwitchWrapper>
      <Switch
        checked={theme === 'dark'}
        checkedChildren={t('common.darkTheme')}
        unCheckedChildren={t('common.lightTheme')}
        onChange={onChange}
      />
    </S.SwitchWrapper>
  );
};
