import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Notification } from 'components/common/Notification/Notification';
import { getWordFromBigLetter } from 'helpers/getWordFromBigLetter';
import { Mention, Notification as NotificationType } from 'constants/notificationsData';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import { RoutesEnum } from 'constants/navigation';
import * as S from './NotificationsOverlay.styles';

interface NotificationsOverlayProps {
  notifications: NotificationType[];
  setNotifications: (state: NotificationType[]) => void;
}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({ notifications, setNotifications }) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find((dbSeverity) => dbSeverity.id === notification.id)?.name;

        return (
          <Notification
            key={index}
            type={type || 'warning'}
            title={getWordFromBigLetter(type || 'warning')}
            description={t(notification.description)}
            {...(type === 'mention' && {
              mentionIconSrc: (notification as Mention).userIcon,
              title: (notification as Mention).userName,
              description: (
                <Trans i18nKey={(notification as Mention).description}>
                  <S.LinkBtn type="link" href={(notification as Mention).href}>
                    {{ place: t((notification as Mention).place) }}
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notifications],
  );

  return (
    <S.NoticesOverlayMenu mode="inline">
      <S.MenuRow gutter={[20, 20]}>
        <Col span={24}>
          {notifications.length > 0 ? (
            <Space direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </Space>
          ) : (
            <S.Text>{t('header.notices.noNotices')}</S.Text>
          )}
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            {notifications.length > 0 && (
              <Col span={24}>
                <S.Btn type="ghost" onClick={() => setNotifications([])}>
                  {t('header.notices.readAll')}
                </S.Btn>
              </Col>
            )}
            <Col span={24}>
              <S.Btn type="link">
                <Link to={RoutesEnum.DASHBOARD_PAGE}>{t('header.notices.viewAll')}</Link>
              </S.Btn>
            </Col>
          </Row>
        </Col>
      </S.MenuRow>
    </S.NoticesOverlayMenu>
  );
};
