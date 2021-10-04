import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../ProfileForm/ProfileForm.styles';
import { CardData } from '../PaymentCardModal';

export const CardholderItem: React.FC<CardData> = ({ disabled, handleInputChange, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="name"
      label={t('profile.nav.payments.cardholderName')}
      requiredMark="optional"
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <Input name="name" onChange={handleInputChange} onFocus={handleInputFocus} disabled={disabled} />
    </FormItem>
  );
};
