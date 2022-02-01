import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../../common/Form/Form.styles';

interface EmailItemProps {
  required?: boolean;
  onClick?: () => void;
  verified?: boolean;
}

export const EmailItem: React.FC<EmailItemProps> = ({ required, onClick, verified }) => {
  const { t } = useTranslation();

  return (
    <FormItem
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
    >
      <Input disabled={verified} onClick={onClick} />
    </FormItem>
  );
};
