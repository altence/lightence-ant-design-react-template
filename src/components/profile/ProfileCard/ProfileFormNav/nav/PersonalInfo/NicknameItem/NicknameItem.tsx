import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const NicknameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="nickname" label={t('profile.nav.personalInfo.nickname')}>
      <Input />
    </FormItem>
  );
};
