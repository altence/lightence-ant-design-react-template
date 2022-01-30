import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Card } from '@app/components/common/Card/Card';
import { NotificationsTypes } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/NotificationsTypes/NotificationsTypes';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <BaseButtonsForm.Item>
        <BaseButtonsForm.Title>{t('profile.nav.notifications.settings')}</BaseButtonsForm.Title>
      </BaseButtonsForm.Item>
      <S.Description>{t('profile.nav.notifications.description')}</S.Description>
      <NotificationsTypes />
    </Card>
  );
};
