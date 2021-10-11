import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { NotificationsTypes } from './NotificationsTypes/NotificationsTypes';
import { FormItem, Title } from '../../ProfileForm/ProfileForm.styles';
import * as S from './Notifications.styles';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <Card padding={isDesktop ? [60, 54] : (isTablet && [40, 30]) || [30, 16]}>
      <FormItem>
        <Title>{t('profile.nav.notifications.settings')}</Title>
      </FormItem>
      <S.Description>{t('profile.nav.notifications.description')}</S.Description>
      <NotificationsTypes />
    </Card>
  );
};
