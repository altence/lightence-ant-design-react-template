import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const EmailItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="email"
      label={t('profile.nav.personalInfo.email')}
      rules={[
        {
          type: 'email',
          message: t('profile.nav.personalInfo.notValidEmail'),
        },
      ]}
    >
      <Input />
    </FormItem>
  );
};
