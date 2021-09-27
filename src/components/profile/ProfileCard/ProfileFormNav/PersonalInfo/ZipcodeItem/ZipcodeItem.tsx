import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const ZipcodeItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="zipcode" label={t('profile.nav.personalInfo.zipcode')}>
      <Input />
    </FormItem>
  );
};
