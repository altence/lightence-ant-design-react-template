import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';

export const NicknameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="nickname" label={t('profile.nav.personalInfo.nickname')}>
      <Input />
    </FormItem>
  );
};
