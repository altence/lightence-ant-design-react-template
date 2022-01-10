import { Col } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { notificationController } from 'controllers/notificationController';
import * as S from '../UIComponentsPage.styles';

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Col>
      <S.Card title={t('notifications.basic')}>
        <Button
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
          onClick={() =>
            notificationController.success({
              message: t('notifications.successTitle'),
            })
          }
        >
          {t('notifications.success')}
        </Button>
        <Button
          onClick={() =>
            notificationController.info({
              message: t('notifications.infoTitle'),
            })
          }
        >
          {t('notifications.info')}
        </Button>
        <Button
          onClick={() =>
            notificationController.warning({
              message: t('notifications.warningTitle'),
            })
          }
        >
          {t('notifications.warning')}
        </Button>
        <Button
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
  );
};

export default NotificationsPage;
