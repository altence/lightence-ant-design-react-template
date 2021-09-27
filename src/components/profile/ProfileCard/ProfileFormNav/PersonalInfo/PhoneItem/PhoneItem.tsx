import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import * as S from './PhoneItem.styles';

export const PhoneItem: React.FC = () => {
  const [phone, setPhone] = useState<string>();

  const { t } = useTranslation();

  return (
    <FormItem
      name="phone"
      label={t('profile.nav.personalInfo.phone')}
      rules={[
        () => ({
          validator(_, value) {
            if (!value || isValidPhoneNumber(phone)) {
              return Promise.resolve();
            }
            return Promise.reject(new Error(t('profile.nav.personalInfo.wrongNumber')));
          },
        }),
      ]}
    >
      <S.PhoneNumberInput value={phone} onChange={setPhone} />
    </FormItem>
  );
};
