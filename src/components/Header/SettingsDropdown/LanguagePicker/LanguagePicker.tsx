import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';

export const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: RadioChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Radio.Group defaultValue={i18n.language} onChange={handleChange}>
      <Radio value="en">English</Radio>
      <Radio value="de">Deutsch</Radio>
    </Radio.Group>
  );
};
