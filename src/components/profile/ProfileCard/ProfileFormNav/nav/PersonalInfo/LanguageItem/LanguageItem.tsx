import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { languages } from 'constants/languages';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

const languageOptions = languages.map((lang) => (
  <Select.Option key={lang.id} value={lang.value}>
    {lang.name}
  </Select.Option>
));

export const LanguageItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="language" label={t('profile.nav.personalInfo.language')}>
      <Select>{languageOptions}</Select>
    </FormItem>
  );
};
