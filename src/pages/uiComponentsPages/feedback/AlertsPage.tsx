import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BaseAlert } from '@app/components/common/BaseAlert/BaseAlert';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const Card = styled(S.Card)`
  .ant-card-body {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AlertsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.alert')}</PageTitle>
      <BaseCol>
        <Card title={t('alerts.basic')}>
          <BaseAlert message={t('alerts.success')} type="success" />
        </Card>
        <Card title={t('alerts.types')}>
          <BaseAlert message={t('alerts.success')} type="success" />
          <BaseAlert message={t('alerts.info')} type="info" />
          <BaseAlert message={t('alerts.warning')} type="warning" />
          <BaseAlert message={t('alerts.error')} type="error" />
        </Card>
        <Card title={t('alerts.closable')}>
          <BaseAlert message={t('alerts.warning')} type="warning" closable />
          <BaseAlert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" closable />
        </Card>
        <Card title={t('alerts.icons')}>
          <BaseAlert message={t('alerts.success')} type="success" showIcon />
          <BaseAlert message={t('alerts.info')} type="info" showIcon />
          <BaseAlert message={t('alerts.warning')} type="warning" showIcon closable />
          <BaseAlert message={t('alerts.error')} type="error" showIcon />
          <BaseAlert
            message={t('alerts.success')}
            description={t('alerts.successDescription')}
            type="success"
            showIcon
          />
          <BaseAlert message={t('alerts.info')} description={t('alerts.infoDescription')} type="info" showIcon />
          <BaseAlert
            message={t('alerts.warning')}
            description={t('alerts.warningDescription')}
            type="warning"
            showIcon
            closable
          />
          <BaseAlert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" showIcon />
        </Card>
        <Card title={t('alerts.customActions')}>
          <BaseAlert
            message={t('alerts.success')}
            type="success"
            showIcon
            action={
              <BaseButton size="small" type="text">
                {t('alerts.undo')}
              </BaseButton>
            }
            closable
          />
          <BaseAlert
            message={t('alerts.error')}
            showIcon
            description={t('alerts.errorDescription')}
            type="error"
            action={
              <BaseButton size="small" danger type="primary">
                {t('alerts.detail')}
              </BaseButton>
            }
          />
          <BaseAlert
            message={t('alerts.warning')}
            type="warning"
            action={
              <BaseSpace>
                <BaseButton size="small" type="ghost">
                  {t('alerts.done')}
                </BaseButton>
              </BaseSpace>
            }
            closable
          />
          <BaseAlert
            message={t('alerts.info')}
            description={t('alerts.infoDescription')}
            type="info"
            action={
              <BaseSpace direction="vertical">
                <BaseButton size="small" type="primary">
                  {t('alerts.accept')}
                </BaseButton>
                <BaseButton size="small" danger type="primary">
                  {t('alerts.decline')}
                </BaseButton>
              </BaseSpace>
            }
            closable
          />
        </Card>
      </BaseCol>
    </>
  );
};

export default AlertsPage;
