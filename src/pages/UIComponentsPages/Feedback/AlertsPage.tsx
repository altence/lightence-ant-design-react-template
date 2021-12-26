import { Col, Space } from 'antd';
import { Alert } from 'components/common/Alert/Alert';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from '../UIComponentsPage.styles';

const Card = styled(S.Card)`
  .ant-card-body {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AlertsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Col>
      <Card title={t('alerts.basic')}>
        <Alert message={t('alerts.success')} type="success" />
      </Card>
      <Card title={t('alerts.types')}>
        <Alert message={t('alerts.success')} type="success" />
        <Alert message={t('alerts.info')} type="info" />
        <Alert message={t('alerts.warning')} type="warning" />
        <Alert message={t('alerts.error')} type="error" />
      </Card>
      <Card title={t('alerts.closable')}>
        <Alert message={t('alerts.warning')} type="warning" closable />
        <Alert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" closable />
      </Card>
      <Card title={t('alerts.icons')}>
        <Alert message={t('alerts.success')} type="success" showIcon />
        <Alert message={t('alerts.info')} type="info" showIcon />
        <Alert message={t('alerts.warning')} type="warning" showIcon closable />
        <Alert message={t('alerts.error')} type="error" showIcon />
        <Alert message={t('alerts.success')} description={t('alerts.successDescription')} type="success" showIcon />
        <Alert message={t('alerts.info')} description={t('alerts.infoDescription')} type="info" showIcon />
        <Alert
          message={t('alerts.warning')}
          description={t('alerts.warningDescription')}
          type="warning"
          showIcon
          closable
        />
        <Alert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" showIcon />
      </Card>
      <Card title={t('alerts.customActions')}>
        <Alert
          message={t('alerts.success')}
          type="success"
          showIcon
          action={
            <Button size="small" type="text">
              {t('alerts.undo')}
            </Button>
          }
          closable
        />
        <Alert
          message={t('alerts.error')}
          showIcon
          description={t('alerts.errorDescription')}
          type="error"
          action={
            <Button size="small" danger>
              {t('alerts.detail')}
            </Button>
          }
        />
        <Alert
          message={t('alerts.warning')}
          type="warning"
          action={
            <Space>
              <Button size="small" type="ghost">
                {t('alerts.done')}
              </Button>
            </Space>
          }
          closable
        />
        <Alert
          message={t('alerts.info')}
          description={t('alerts.infoDescription')}
          type="info"
          action={
            <Space direction="vertical">
              <Button size="small" type="primary">
                {t('alerts.accept')}
              </Button>
              <Button size="small" danger type="ghost">
                {t('alerts.decline')}
              </Button>
            </Space>
          }
          closable
        />
      </Card>
    </Col>
  );
};

export default AlertsPage;
