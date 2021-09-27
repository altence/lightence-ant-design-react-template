import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';

export const FirstNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="firstName" label={t('profile.nav.personalInfo.firstName')}>
      <Input />
    </FormItem>
  );
};
