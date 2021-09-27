import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/profile/ProfileCard/ProfileForm/ProfileForm.styles';

export const CurrentPasswordItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="password"
      requiredMark="optional"
      label={t('profile.nav.securitySettings.currentPassword')}
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
      ]}
    >
      <Input.Password />
    </FormItem>
  );
};
