import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { InputItem } from './InputItem/InputItem';
import { socialLinksData } from 'constants/socialLinksData';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const SocialLinksItem: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = useMemo(
    () => socialLinksData.map((link) => <InputItem key={link.id} name={link.name} Addon={link.Icon} />),
    [],
  );

  return <FormItem label={t('profile.nav.personalInfo.socialLinks')}>{socialLinks}</FormItem>;
};
