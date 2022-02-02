import React from 'react';
import { FormItemProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { Input, InputProps } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface EmailItemProps extends FormItemProps {
  isSuccess?: boolean;
  successText?: string;
  onClick?: () => void;
  inputProps?: InputProps;
}

export const EmailItem: React.FC<EmailItemProps> = ({
  required,
  isSuccess,
  successText,
  onClick,
  inputProps,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="email"
      $isSuccess={isSuccess}
      $successText={successText}
      label={t('common.email')}
      rules={[
        { required, message: t('common.requiredField') },
        {
          type: 'email',
          message: t('profile.nav.personalInfo.notValidEmail'),
        },
      ]}
      {...props}
    >
      <Input onClick={onClick} {...inputProps} />
    </BaseButtonsForm.Item>
  );
};
