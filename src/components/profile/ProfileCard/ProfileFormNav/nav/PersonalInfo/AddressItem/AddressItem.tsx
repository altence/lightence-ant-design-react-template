import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const AddressItem: React.FC<{ number: number }> = ({ number }) => {
  const { t } = useTranslation();

  return (
    <FormItem name={`address${number}`} label={`${t('profile.nav.personalInfo.address')} ${number}`}>
      <Input />
    </FormItem>
  );
};
