import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardInputProps } from '../interfaces';

export const CardholderItem: React.FC<CardInputProps> = ({ disabled, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="name"
      label={t('profile.nav.payments.cardholderName')}
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <Input
        name="name"
        placeholder={t('profile.nav.payments.yourName')}
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </FormItem>
  );
};
