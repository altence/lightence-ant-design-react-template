import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.notification')}</PageTitle>
      <BaseCol>
        <S.Card title={t('notifications.basic')}>
          <BaseButton
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.basicTitle')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('notifications.types')}>
          <BaseButton
            severity="success"
            onClick={() =>
              notificationController.success({
                message: t('notifications.successTitle'),
                description: t('notifications.successDescription'),
              })
            }
          >
            {t('notifications.success')}
          </BaseButton>
          <BaseButton
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.info')}
          </BaseButton>
          <BaseButton
            severity="warning"
            onClick={() =>
              notificationController.warning({
                message: t('notifications.warningTitle'),
                description: t('notifications.warningDescription'),
              })
            }
          >
            {t('notifications.warning')}
          </BaseButton>
          <BaseButton
            severity="error"
            onClick={() =>
              notificationController.error({
                message: t('notifications.errorTitle'),
                description: t('notifications.errorDescription'),
              })
            }
          >
            {t('notifications.error')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('notifications.withoutDescription')}>
          <BaseButton
            severity="success"
            onClick={() =>
              notificationController.success({
                message: t('notifications.successTitle'),
              })
            }
          >
            {t('notifications.success')}
          </BaseButton>
          <BaseButton
            severity="info"
            onClick={() =>
              notificationController.info({
                message: t('notifications.infoTitle'),
              })
            }
          >
            {t('notifications.info')}
          </BaseButton>
          <BaseButton
            severity="warning"
            onClick={() =>
              notificationController.warning({
                message: t('notifications.warningTitle'),
              })
            }
          >
            {t('notifications.warning')}
          </BaseButton>
          <BaseButton
            severity="error"
            onClick={() =>
              notificationController.error({
                message: t('notifications.errorTitle'),
              })
            }
          >
            {t('notifications.error')}
          </BaseButton>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default NotificationsPage;
