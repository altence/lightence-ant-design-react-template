import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const AddressItem: React.FC<{ number: number }> = ({ number }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name={`address${number}`} label={`${t('common.address')} ${number}`}>
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
