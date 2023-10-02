import React from 'react';
import PhoneInput from 'antd-phone-input/legacy';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface PhoneItemsProps {
  required?: boolean;
  onClick?: () => void;
  verified?: boolean;
}

export const PhoneItem: React.FC<PhoneItemsProps> = ({ required, onClick, verified }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item
      name="phone"
      $isSuccess={verified}
      $successText={t('profile.nav.personalInfo.verified')}
      label={t('common.phone')}
      rules={[
        { required, message: t('common.requiredField') },
        () => ({
          validator(_, { valid }) {
            if (valid()) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t('profile.nav.personalInfo.wrongNumber')));
          },
        }),
      ]}
    >
      <PhoneInput disabled={verified} onFocus={onClick} />
    </BaseButtonsForm.Item>
  );
};
