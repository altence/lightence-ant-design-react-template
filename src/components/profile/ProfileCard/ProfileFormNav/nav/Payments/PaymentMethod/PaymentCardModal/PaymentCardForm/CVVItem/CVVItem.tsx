import React from 'react';
import { useTranslation } from 'react-i18next';
import MaskedInput from 'antd-mask-input';
import { FormItem } from '../../../../../../ProfileForm/ProfileForm.styles';
import { CardData } from '../../PaymentCardModal';

export const CVVItem: React.FC<CardData> = ({ disabled, handleInputChange, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="cvc"
      label={t('profile.nav.payments.CVV')}
      requiredMark="optional"
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <MaskedInput mask="111" name="cvc" onChange={handleInputChange} onFocus={handleInputFocus} disabled={disabled} />
    </FormItem>
  );
};
