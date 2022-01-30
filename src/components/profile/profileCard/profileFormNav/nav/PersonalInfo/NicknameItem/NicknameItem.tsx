import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const NicknameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="nickname" label={t('profile.nav.personalInfo.nickname')}>
      <Input />
    </BaseButtonsForm.Item>
  );
};
