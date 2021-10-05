import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { NotificationsTypes } from './NotificationsTypes/NotificationsTypes';
import { Title } from '../../ProfileForm/ProfileForm.styles';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card padding="1.875rem 1rem">
      <Title>{t('profile.nav.notifications.settings')}</Title>
      <S.Description>{t('profile.nav.notifications.description')}</S.Description>
      <NotificationsTypes />
    </Card>
  );
};
