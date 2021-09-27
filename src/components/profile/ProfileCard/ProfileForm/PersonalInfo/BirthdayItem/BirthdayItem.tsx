import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormItem } from '../../ProfileForm.styles';
import * as S from './BirthdayItem.styles';

export const BirthdayItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="birthday" label={t('profile.nav.personalInfo.birthday')}>
      <S.BirthdayPicker format="L" />
    </FormItem>
  );
};
