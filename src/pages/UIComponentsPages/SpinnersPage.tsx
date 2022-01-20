import { useState } from 'react';
import { Col, Alert, Switch, Space } from 'antd';
import { Spinner } from 'components/common/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined, RedoOutlined, ChromeOutlined } from '@ant-design/icons';
import * as S from './UIComponentsPage.styles';
import { Loading } from '@app/components/common/Loading';

const antIcon1 = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const antIcon2 = <RedoOutlined style={{ fontSize: 24 }} spin />;
const antIcon3 = <ChromeOutlined style={{ fontSize: 24 }} spin />;

const SpinnersPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [delayLoading, setDelayLoading] = useState(false);
  return (
    <Col>
      <S.Card title={t('spinners.sizes')}>
        <Spinner size="small" />
        <Spinner />
        <Spinner size="large" />
      </S.Card>
      <S.Card title={t('spinners.customDescription')}>
        <Spinner tip={t('spinners.loading')} />
      </S.Card>
      <S.Card title={t('spinners.customIndicator')}>
        <Spinner indicator={antIcon1} />
        <Spinner indicator={antIcon2} />
        <Spinner indicator={antIcon3} />
      </S.Card>
      <S.Card title={t('spinners.customLoading')}>
        <Space direction="vertical" size={16}>
          <Spinner spinning={loading}>
            <Alert message={t('spinners.alertMessage')} description={t('spinners.alertDescription')} type="info" />
          </Spinner>
          <div>
            {t('spinners.loadingState')}
            <Switch checked={loading} onChange={() => setLoading(!loading)} />
          </div>
        </Space>
      </S.Card>
      <S.Card title={t('spinners.customLoadingDelay')}>
        <Space direction="vertical" size={16}>
          <Spinner spinning={delayLoading} delay={500}>
            <Alert message={t('spinners.alertMessage')} description={t('spinners.alertDescription')} type="info" />
          </Spinner>
          <div>
            {t('spinners.loadingState')}
            <Switch checked={delayLoading} onChange={() => setDelayLoading(!delayLoading)} />
          </div>
        </Space>
      </S.Card>
      <S.Card title={t('spinners.globalAppSpinner')}>
        <Loading />
      </S.Card>
    </Col>
  );
};

export default SpinnersPage;
