import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const LastNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="lastName" label={t('common.lastName')}>
      <Input />
    </BaseButtonsForm.Item>
  );
};
