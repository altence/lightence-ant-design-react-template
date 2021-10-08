import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

interface EmailItemProps {
  required?: boolean;
  onClick?: () => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({ required, onClick }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="email"
      requiredMark={required && 'optional'}
      label={t('profile.nav.personalInfo.email')}
      rules={[
        { required, message: t('common.requiredField') },
        {
          type: 'email',
          message: t('profile.nav.personalInfo.notValidEmail'),
        },
      ]}
    >
      <Input onClick={onClick} />
    </FormItem>
  );
};
