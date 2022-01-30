import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';

export const ConfirmItemPassword: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="confirmPassword"
      label={t('profile.nav.securitySettings.confirmPassword')}
      dependencies={['newPassword']}
      rules={[
        {
          required: true,
          message: t('profile.nav.securitySettings.requiredPassword'),
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t('profile.nav.securitySettings.dontMatchPassword')));
          },
        }),
      ]}
    >
      <InputPassword />
    </BaseButtonsForm.Item>
  );
};
