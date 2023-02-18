import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseFormItemProps } from '@app/components/common/forms/components/BaseFormItem/BaseFormItem';

interface EmailItemProps extends BaseFormItemProps {
  verified?: boolean;
  onClick?: () => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({ required, onClick, verified, ...props }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="email"
      $isSuccess={verified}
      $successText={t('profile.nav.personalInfo.verified')}
      label={t('common.email')}
      rules={[
        { required, message: t('common.requiredField') },
        {
          type: 'email',
          message: t('common.notValidEmail'),
        },
      ]}
      {...props}
    >
      <BaseInput disabled={verified} onClick={onClick} />
    </BaseButtonsForm.Item>
  );
};
