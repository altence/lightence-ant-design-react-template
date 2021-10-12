import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../../common/Form/Form.styles';

export const LastNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="lastName" label={t('profile.nav.personalInfo.lastName')}>
      <Input />
    </FormItem>
  );
};
