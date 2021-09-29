import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from '../../ProfileForm/ProfileForm.styles';
import * as S from './Notifications.styles';
import { NotificationsTypes } from './NotificationsTypes/NotificationsTypes';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('profile.nav.notifications.settings')}</Title>
      <S.Description>{t('profile.nav.notifications.description')}</S.Description>
      <NotificationsTypes />
    </>
  );
};
