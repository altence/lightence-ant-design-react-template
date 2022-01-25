import { Col } from 'antd';
import { Result } from 'components/common/Result/Result';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from '../UIComponentsPage.styles';

const Card = styled(S.Card)`
  .ant-card-body {
    justify-content: center;
  }
`;

const BuyButton = styled(Button)`
  @media only screen and ${(props) => props.theme.media.xs} {
    margin-top: 1rem;
  }

  @media only screen and ${(props) => props.theme.media.md} {
    margin-top: 0;
  }
`;

const ProgressPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Col>
      <Card title={t('results.success')}>
        <Result
          status="success"
          title={t('results.successTitle')}
          subTitle={t('results.successSubTitle')}
          extra={[
            <Button type="primary" key="console">
              {t('results.goConsole')}
            </Button>,
            <BuyButton key="buy">{t('results.buyAgain')}</BuyButton>,
          ]}
        />
      </Card>
      <Card title={t('results.info')}>
        <Result
          title={t('results.infoTitle')}
          extra={
            <Button type="primary" key="console">
              {t('results.goConsole')}
            </Button>
          }
        />
      </Card>
      <Card title={t('results.warning')}>
        <Result
          status="warning"
          title={t('results.warningTitle')}
          extra={
            <Button type="primary" key="console">
              {t('results.goConsole')}
            </Button>
          }
        />
      </Card>
      <Card title={t('results.error')}>
        <Result
          status="error"
          title={t('results.errorTitle')}
          subTitle={t('results.errorSubTitle')}
          extra={[
            <Button type="primary" key="console">
              {t('results.goConsole')}
            </Button>,
            <BuyButton key="buy">{t('results.buyAgain')}</BuyButton>,
          ]}
        />
      </Card>
    </Col>
  );
};

export default ProgressPage;
