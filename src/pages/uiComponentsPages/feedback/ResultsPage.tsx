import { Col } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Result } from '@app/components/common/Result/Result';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

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
    <>
      <PageTitle>{t('common.result')}</PageTitle>
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
    </>
  );
};

export default ProgressPage;
