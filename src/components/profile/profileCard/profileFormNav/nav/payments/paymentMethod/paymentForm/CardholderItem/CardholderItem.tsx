import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Input } from '@app/components/common/inputs/Input/Input';
import { CardInputProps } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';

export const CardholderItem: React.FC<CardInputProps> = ({ disabled, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
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
    </BaseButtonsForm.Item>
  );
};
