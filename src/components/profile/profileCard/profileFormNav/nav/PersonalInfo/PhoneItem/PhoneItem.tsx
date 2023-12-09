import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneNumberInput from 'antd-phone-input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface PhoneItemsProps {
  required?: boolean;
  onClick?: () => void;
  verified?: boolean;
}

export const PhoneItem: React.FC<PhoneItemsProps> = ({ required, onClick, verified }) => {
  const { t } = useTranslation();
  const [isValid, setIsValid] = useState(true);

  return (
    <BaseButtonsForm.Item
      name="phone"
      $isSuccess={isValid}
      $successText={t('profile.nav.personalInfo.verified')}
      label={t('common.phone')}
      rules={[
        { required, message: t('common.requiredField') },
        () => ({
          validator(_, value) {
            setIsValid(value.valid());
            if (!value || !value.valid()) {
              return Promise.reject(new Error(t('profile.nav.personalInfo.wrongNumber')));
            }
            return Promise.resolve();
          },
        }),
      ]}
    >
      <PhoneNumberInput
        disabled={verified}
        className="ant-input"
        onClick={onClick}
      />
    </BaseButtonsForm.Item>
  );
};
