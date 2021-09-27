import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/profile/ProfileCard/ProfileForm/ProfileForm.styles';

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
        {
          pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
          message: t('profile.nav.securitySettings.notValidPassword'),
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
      <Input.Password />
    </FormItem>
  );
};
