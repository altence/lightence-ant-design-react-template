import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';
import { Dates } from '../../../../constants/Dates';

export const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = async (e: RadioChangeEvent) => {
    const locale = e.target.value;

    Dates.setLocale(locale);
    await i18n.changeLanguage(locale);
  };

  return (
    <Radio.Group defaultValue={i18n.language} onChange={handleChange}>
      <Radio value="en">English</Radio>
      <Radio value="de">Deutsch</Radio>
    </Radio.Group>
  );
};
