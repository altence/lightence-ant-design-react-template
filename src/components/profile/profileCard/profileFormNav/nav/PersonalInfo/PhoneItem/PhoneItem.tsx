import React from 'react';
import { useTranslation } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as S from './PhoneItem.styles';

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
          validator(_, value) {
            if (!value || isValidPhoneNumber(value)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t('profile.nav.personalInfo.wrongNumber')));
          },
        }),
      ]}
    >
      <S.PhoneNumberInput disabled={verified} className="ant-input" onClick={onClick} />
    </BaseButtonsForm.Item>
  );
};
