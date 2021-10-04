import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const LanguageItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="language" label={t('profile.nav.personalInfo.language')}>
      <Select>
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="de">Deutsch</Select.Option>
      </Select>
    </FormItem>
  );
};
