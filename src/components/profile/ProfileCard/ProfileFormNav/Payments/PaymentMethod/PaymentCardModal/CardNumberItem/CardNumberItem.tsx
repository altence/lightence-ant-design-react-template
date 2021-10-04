import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../ProfileForm/ProfileForm.styles';
import { CardData } from '../PaymentCardModal';

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
      <Input name="number" onChange={handleInputChange} onFocus={handleInputFocus} disabled={disabled} />
    </FormItem>
  );
};
