import React from 'react';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { Dates } from 'constants/Dates';
import { RadioBtn } from '../SettingsOverlay.styles';

export const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = async (e: RadioChangeEvent) => {
    const locale = e.target.value;

    Dates.setLocale(locale);
    await i18n.changeLanguage(locale);
  };

  return (
    <Radio.Group defaultValue={i18n.language} onChange={handleChange}>
      <Space direction="vertical">
        <RadioBtn value="en">
          <Space align="center">
            English
            <ReactCountryFlag svg countryCode="GB" />
          </Space>
        </RadioBtn>
        <RadioBtn value="de">
          <Space align="center">
            Deutsch
            <ReactCountryFlag svg countryCode="DE" />
          </Space>
        </RadioBtn>
      </Space>
    </Radio.Group>
  );
};
