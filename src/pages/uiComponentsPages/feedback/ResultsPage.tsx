import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BaseResult } from '@app/components/common/BaseResult/BaseResult';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const Card = styled(S.Card)`
  .ant-card-body {
    justify-content: center;
  }
`;

const BuyButton = styled(BaseButton)`
  @media only screen and ${media.xs} {
    margin-top: 1rem;
  }

  @media only screen and ${media.md} {
    margin-top: 0;
  }
`;

const ProgressPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.result')}</PageTitle>
      <BaseCol>
        <Card title={t('results.success')}>
          <BaseResult
            status="success"
            title={t('results.successTitle')}
            subTitle={t('results.successSubTitle')}
            extra={[
              <BaseButton type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>,
              <BuyButton key="buy">{t('results.buyAgain')}</BuyButton>,
            ]}
          />
        </Card>
        <Card title={t('results.info')}>
          <BaseResult
            title={t('results.infoTitle')}
            extra={
              <BaseButton type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>
            }
          />
        </Card>
        <Card title={t('results.warning')}>
          <BaseResult
            status="warning"
            title={t('results.warningTitle')}
            extra={
              <BaseButton type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>
            }
          />
        </Card>
        <Card title={t('results.error')}>
          <BaseResult
            status="error"
            title={t('results.errorTitle')}
            subTitle={t('results.errorSubTitle')}
            extra={[
              <BaseButton type="primary" key="console">
                {t('results.goConsole')}
              </BaseButton>,
              <BuyButton key="buy">{t('results.buyAgain')}</BuyButton>,
            ]}
          />
        </Card>
      </BaseCol>
    </>
  );
};

export default ProgressPage;
