import React from 'react';
import { useTranslation } from 'react-i18next';
import MaskedInput from 'antd-mask-input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { CardInputProps } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';

export const CVVItem: React.FC<CardInputProps> = ({ disabled, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="cvc"
      label={t('profile.nav.payments.CVV')}
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <MaskedInput
        placeholderChar=" "
        placeholder="***"
        mask="111"
        name="cvc"
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </BaseButtonsForm.Item>
  );
};
