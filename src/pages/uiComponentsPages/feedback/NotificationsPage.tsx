import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button';
import { notificationController } from '@app/controllers/notificationController';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.notification')}</PageTitle>
      <Col>
        <S.Card title={t('notifications.basic')}>
          <Button
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.basicTitle')}
          </Button>
        </S.Card>
        <S.Card title={t('notifications.types')}>
          <Button
            severity="success"
            onClick={() =>
              notificationController.success({
                message: t('notifications.successTitle'),
                description: t('notifications.successDescription'),
              })
            }
          >
            {t('notifications.success')}
          </Button>
          <Button
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.info')}
          </Button>
          <Button
            severity="warning"
            onClick={() =>
              notificationController.warning({
                message: t('notifications.warningTitle'),
                description: t('notifications.warningDescription'),
              })
            }
          >
            {t('notifications.warning')}
          </Button>
          <Button
            severity="error"
            onClick={() =>
              notificationController.error({
                message: t('notifications.errorTitle'),
                description: t('notifications.errorDescription'),
              })
            }
          >
            {t('notifications.error')}
          </Button>
        </S.Card>
        <S.Card title={t('notifications.withoutDescription')}>
          <Button
            severity="success"
            onClick={() =>
              notificationController.success({
                message: t('notifications.successTitle'),
              })
            }
          >
            {t('notifications.success')}
          </Button>
          <Button
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
              })
            }
          >
            {t('notifications.info')}
          </Button>
          <Button
            severity="warning"
            onClick={() =>
              notificationController.warning({
                message: t('notifications.warningTitle'),
              })
            }
          >
            {t('notifications.warning')}
          </Button>
          <Button
            severity="error"
            onClick={() =>
              notificationController.error({
                message: t('notifications.errorTitle'),
              })
            }
          >
            {t('notifications.error')}
          </Button>
        </S.Card>
      </Col>
    </>
  );
};

export default NotificationsPage;
