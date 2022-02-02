import React from 'react';
import { useTranslation } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { FormItemProps } from 'antd';
import { InputProps } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as S from './PhoneItem.styles';

interface PhoneItemsProps extends FormItemProps {
  isSuccess?: boolean;
  successText?: string;
  onClick?: () => void;
  inputProps?: InputProps;
}

export const PhoneItem: React.FC<PhoneItemsProps> = ({
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
      name="phone"
      $isSuccess={isSuccess}
      $successText={successText}
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
      {...props}
    >
      <S.PhoneNumberInput className="ant-input" onClick={onClick} {...inputProps} />
    </BaseButtonsForm.Item>
  );
};
