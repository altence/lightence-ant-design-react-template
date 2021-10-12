import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/common/Form/Form.styles';
import { InputPassword } from 'components/common/inputs/InputPassword/InputPassword';

export const ConfirmItemPassword: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="confirmPassword"
      requiredMark="optional"
      label={t('profile.nav.securitySettings.confirmPassword')}
      dependencies={['newPassword']}
      hasFeedback
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
    </FormItem>
  );
};
