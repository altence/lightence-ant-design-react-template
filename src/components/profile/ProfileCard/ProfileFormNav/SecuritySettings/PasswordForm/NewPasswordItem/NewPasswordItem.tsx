import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/profile/ProfileCard/ProfileForm/ProfileForm.styles';

export const NewPasswordItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="newPassword"
      requiredMark="optional"
      label={t('profile.nav.securitySettings.newPassword')}
      dependencies={['password']}
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
            if (!value || getFieldValue('password') !== value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t('profile.nav.securitySettings.samePassword')));
          },
        }),
      ]}
    >
      <Input.Password />
    </FormItem>
  );
};
