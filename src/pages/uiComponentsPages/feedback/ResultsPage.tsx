import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BaseResult } from '@app/components/common/BaseResult/BaseResult';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { media } from '@app/styles/themes/constants';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useMemo } from 'react';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';

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

  const commonExtra = useMemo(
    () => (
      <BaseRow gutter={[8, 8]}>
        <BaseCol span={24}>
          <BaseButton block type="primary" key="console">
            {t('results.goConsole')}
          </BaseButton>
        </BaseCol>

        <BaseCol span={24}>
          <BuyButton block key="buy">
            {t('results.buyAgain')}
          </BuyButton>
        </BaseCol>
      </BaseRow>
    ),
    [t],
  );

  return (
    <>
      <PageTitle>{t('common.result')}</PageTitle>
      <BaseCol>
        <Card title={t('results.success')}>
          <BaseResult
            status="success"
            title={t('results.successTitle')}
            subTitle={t('results.successSubTitle')}
            extra={commonExtra}
          />
        </Card>
        <Card title={t('results.info')}>
          <BaseResult
            title={t('results.infoTitle')}
            extra={
              <BaseButton block type="primary" key="console">
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
              <BaseButton block type="primary" key="console">
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
            extra={commonExtra}
          />
        </Card>
      </BaseCol>
    </>
  );
};

export default ProgressPage;
