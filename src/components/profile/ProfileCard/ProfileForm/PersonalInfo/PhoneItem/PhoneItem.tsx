import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';
import * as S from './PhoneItem.styles';

export const PhoneItem: React.FC = () => {
  const [phone, setPhone] = useState<string>();

  const { t } = useTranslation();

  return (
    <FormItem name="phone" label={t('profile.nav.personalInfo.phone')}>
      <S.PhoneNumberInput value={phone} onChange={setPhone} />
    </FormItem>
  );
};
