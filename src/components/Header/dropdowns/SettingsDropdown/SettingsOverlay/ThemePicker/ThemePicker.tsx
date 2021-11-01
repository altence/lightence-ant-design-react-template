import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'context/ThemeContext';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { RadioBtn } from '../SettingsOverlay.styles';

export const ThemePicker: React.FC = () => {
  const { theme: currentTheme, setTheme } = useContext(ThemeContext);

  const onChange = (event: RadioChangeEvent) => {
    const theme = event.target.value;

    setTheme(theme === 'dark' ? 'dark' : 'light');
  };

  const { t } = useTranslation();

  return (
    <Radio.Group defaultValue={currentTheme} onChange={onChange}>
      <Space direction="vertical">
        <RadioBtn value="light">{t('header.lightTheme')}</RadioBtn>
        <RadioBtn value="dark">{t('header.darkTheme')}</RadioBtn>
      </Space>
    </Radio.Group>
  );
};
