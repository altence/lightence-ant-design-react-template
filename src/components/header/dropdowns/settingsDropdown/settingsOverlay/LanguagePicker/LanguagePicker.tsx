import React from 'react';
import { Radio, Space } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles';
import { useLanguage } from '@app/hooks/useLanguage';

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Radio.Group defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
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
