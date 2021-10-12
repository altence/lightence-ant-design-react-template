import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/common/Form/Form.styles';
import { passwordPattern } from 'constants/patterns';
import { InputPassword } from 'components/common/inputs/InputPassword/InputPassword';

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
          pattern: passwordPattern,
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
      <InputPassword />
    </FormItem>
  );
};
