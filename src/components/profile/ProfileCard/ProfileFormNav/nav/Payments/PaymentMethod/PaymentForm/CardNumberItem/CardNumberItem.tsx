import React from 'react';
import { useTranslation } from 'react-i18next';
import { MaskedInput } from 'components/common/inputs/MaskedInput/MaskedInput';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardInputProps } from '../interfaces';

export const CardNumberItem: React.FC<CardInputProps> = ({ disabled, handleInputFocus }) => {
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
        placeholderChar=" "
        placeholder={t('profile.nav.payments.yourCardNumber')}
        name="number"
        mask="1111 1111 1111 1111"
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </FormItem>
  );
};
