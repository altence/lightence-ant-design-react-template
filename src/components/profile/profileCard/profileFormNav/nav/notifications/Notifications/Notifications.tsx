import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import { NotificationsTypes } from '../NotificationsTyles/NotificationsTypes';
import { FormItem, Title } from '../../../../../../common/Form/Form.styles';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <FormItem>
        <Title>{t('profile.nav.notifications.settings')}</Title>
      </FormItem>
      <S.Description>{t('profile.nav.notifications.description')}</S.Description>
      <NotificationsTypes />
    </Card>
  );
};
