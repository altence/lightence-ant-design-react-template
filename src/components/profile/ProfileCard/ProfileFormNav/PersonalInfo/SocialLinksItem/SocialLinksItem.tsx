import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { socialLinksData } from 'constants/socialLinksData';
import { InputItem } from './InputItem/InputItem';

export const SocialLinksItem: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = useMemo(
    () => socialLinksData.map((link) => <InputItem key={link.id} name={link.name} Addon={link.Icon} />),
    [],
  );

  return <FormItem label={t('profile.nav.personalInfo.socialLinks')}>{socialLinks}</FormItem>;
};
