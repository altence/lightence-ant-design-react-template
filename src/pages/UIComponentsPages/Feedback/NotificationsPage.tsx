import { Col } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { notificationController } from 'controllers/notificationController';
import * as S from '../UIComponentsPage.styles';
import styled from 'styled-components';

const SuccessButton = styled(Button)`
  background: ${(props) => props.theme.colors.notifications.success};
  border-color: ${(props) => props.theme.colors.main.success};
  color: ${(props) => props.theme.colors.main.success};
`;

const InfoButton = styled(Button)`
  background: ${(props) => props.theme.colors.notifications.primary};
  border-color: ${(props) => props.theme.colors.main.primary};
  color: ${(props) => props.theme.colors.main.primary};
`;

const WarningButton = styled(Button)`
  background: ${(props) => props.theme.colors.notifications.warning};
  border-color: ${(props) => props.theme.colors.main.warning};
  color: ${(props) => props.theme.colors.main.warning};
`;

const ErrorButton = styled(Button)`
  background: ${(props) => props.theme.colors.notifications.error};
  border-color: ${(props) => props.theme.colors.main.error};
  color: ${(props) => props.theme.colors.main.error};
`;

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Col>
      <S.Card title={t('notifications.basic')}>
        <InfoButton
          onClick={() =>
            notificationController.info({
              message: t('notifications.infoTitle'),
              description: t('notifications.infoDescription'),
            })
          }
        >
          {t('notifications.basicTitle')}
        </InfoButton>
      </S.Card>
      <S.Card title={t('notifications.types')}>
        <SuccessButton
          onClick={() =>
            notificationController.success({
              message: t('notifications.successTitle'),
              description: t('notifications.successDescription'),
            })
          }
        >
          {t('notifications.success')}
        </SuccessButton>
        <InfoButton
          onClick={() =>
            notificationController.info({
              message: t('notifications.infoTitle'),
              description: t('notifications.infoDescription'),
            })
          }
        >
          {t('notifications.info')}
        </InfoButton>
        <WarningButton
          onClick={() =>
            notificationController.warning({
              message: t('notifications.warningTitle'),
              description: t('notifications.warningDescription'),
            })
          }
        >
          {t('notifications.warning')}
        </WarningButton>
        <ErrorButton
          onClick={() =>
            notificationController.error({
              message: t('notifications.errorTitle'),
              description: t('notifications.errorDescription'),
            })
          }
        >
          {t('notifications.error')}
        </ErrorButton>
      </S.Card>
      <S.Card title={t('notifications.withoutDescription')}>
        <SuccessButton
          onClick={() =>
            notificationController.success({
              message: t('notifications.successTitle'),
            })
          }
        >
          {t('notifications.success')}
        </SuccessButton>
        <InfoButton
          onClick={() =>
            notificationController.info({
              message: t('notifications.infoTitle'),
            })
          }
        >
          {t('notifications.info')}
        </InfoButton>
        <WarningButton
          onClick={() =>
            notificationController.warning({
              message: t('notifications.warningTitle'),
            })
          }
        >
          {t('notifications.warning')}
        </WarningButton>
        <ErrorButton
          onClick={() =>
            notificationController.error({
              message: t('notifications.errorTitle'),
            })
          }
        >
          {t('notifications.error')}
        </ErrorButton>
      </S.Card>
    </Col>
  );
};

export default NotificationsPage;
