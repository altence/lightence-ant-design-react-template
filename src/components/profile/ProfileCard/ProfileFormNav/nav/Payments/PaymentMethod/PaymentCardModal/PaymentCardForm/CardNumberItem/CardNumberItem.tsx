import React from 'react';
import { useTranslation } from 'react-i18next';
import MaskedInput from 'antd-mask-input';
import { FormItem } from '../../../../../../ProfileForm/ProfileForm.styles';
import { CardData } from '../../PaymentCardModal';

export const CardNumberItem: React.FC<CardData> = ({ disabled, handleInputChange, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="number"
      label={t('profile.nav.payments.cardNumber')}
      requiredMark="optional"
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <MaskedInput
        name="number"
        mask="1111 1111 1111 1111"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </FormItem>
  );
};
