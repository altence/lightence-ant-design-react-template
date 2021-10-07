import React from 'react';
import { useTranslation } from 'react-i18next';
import MaskedInput from 'antd-mask-input';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { CardInputProps } from '../interfaces';

export const CardNumberItem: React.FC<CardInputProps> = ({ disabled, handleInputChange, handleInputFocus }) => {
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
        name="number"
        mask="1111 1111 1111 1111"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </FormItem>
  );
};
