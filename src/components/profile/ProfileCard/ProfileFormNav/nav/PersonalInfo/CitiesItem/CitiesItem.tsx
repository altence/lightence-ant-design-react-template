import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from '@app/components/common/inputs/Input/Input';

export const CitiesItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="city" label={t('profile.nav.personalInfo.city')}>
      <Input />
    </FormItem>
  );
};
