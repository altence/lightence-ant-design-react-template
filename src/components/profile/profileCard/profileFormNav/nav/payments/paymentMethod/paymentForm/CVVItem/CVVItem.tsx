import React from 'react';
import { useTranslation } from 'react-i18next';
import { MaskedInput } from 'components/common/inputs/MaskedInput/MaskedInput';
import { FormItem } from 'components/common/Form/Form.styles';
import { CardInputProps } from '../interfaces';

export const CVVItem: React.FC<CardInputProps> = ({ disabled, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
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
    </FormItem>
  );
};
