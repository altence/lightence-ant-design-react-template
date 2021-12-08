import { useState } from 'react';
import { Col, Alert, Switch } from 'antd';
import { Spinner } from 'components/common/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined, RedoOutlined, ChromeOutlined } from '@ant-design/icons';
import * as S from './UIComponentsPage.styles';

const antIcon1 = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const antIcon2 = <RedoOutlined style={{ fontSize: 24 }} spin />;
const antIcon3 = <ChromeOutlined style={{ fontSize: 24 }} spin />;

const SpinnersPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [delayLoading, setDelayLoading] = useState(false);
  return (
    <Col>
      <S.Card title={t('spinners.sizes')} padding="1.25rem 0">
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </S.Card>
      <S.Card title={t('spinners.customDescription')} padding="1.25rem 0">
        <Spinner tip={t('spinners.loading')} />
      </S.Card>
      <S.Card title={t('spinners.customIndicator')} padding="1.25rem 0">
        <Spinner indicator={antIcon1} />
        <Spinner indicator={antIcon2} />
        <Spinner indicator={antIcon3} />
      </S.Card>
      <S.Card title={t('spinners.customLoading')} padding="1.25rem 0">
        <div>
          <Spinner spinning={loading}>
            <Alert message={t('spinners.alertMessage')} description={t('spinners.alertDescription')} type="info" />
          </Spinner>
          <div style={{ marginTop: 16 }}>
            {t('spinners.loadingState')}
            <Switch checked={loading} onChange={() => setLoading(!loading)} />
          </div>
        </div>
      </S.Card>
      <S.Card title={t('spinners.customLoadingDelay')} padding="1.25rem 0">
        <div>
          <Spinner spinning={delayLoading} delay={500}>
            <Alert message={t('spinners.alertMessage')} description={t('spinners.alertDescription')} type="info" />
          </Spinner>
          <div style={{ marginTop: 16 }}>
            {t('spinners.loadingState')}
            <Switch checked={delayLoading} onChange={() => setDelayLoading(!delayLoading)} />
          </div>
        </div>
      </S.Card>
    </Col>
  );
};

export default SpinnersPage;
