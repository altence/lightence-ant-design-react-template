import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined, RedoOutlined, ChromeOutlined } from '@ant-design/icons';
import { BaseSpin } from '@app/components/common/BaseSpin/BaseSpin';
import { BaseAlert } from '@app/components/common/BaseAlert/BaseAlert';
import { GlobalSpinner } from '@app/components/common/GlobalSpinner/GlobalSpinner';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { themeObject } from '@app/styles/themes/themeVariables';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const antIcon1 = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const antIcon2 = <RedoOutlined style={{ fontSize: 24 }} spin />;
const antIcon3 = <ChromeOutlined style={{ fontSize: 24 }} spin />;

const SpinnersPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [delayLoading, setDelayLoading] = useState(false);

  return (
    <>
      <PageTitle>{t('common.spinner')}</PageTitle>
      <BaseCol>
        <S.Card title={t('spinners.globalAppSpinner')}>
          <GlobalSpinner color={themeObject['light'].spinnerBase} />
          <GlobalSpinner color={themeObject['dark'].spinnerBase} />
        </S.Card>
        <S.Card title={t('spinners.sizes')}>
          <BaseSpin size="small" />
          <BaseSpin />
          <BaseSpin size="large" />
        </S.Card>
        <S.Card title={t('spinners.customDescription')}>
          <BaseSpin tip={t('spinners.loading')} />
        </S.Card>
        <S.Card title={t('spinners.customIndicator')}>
          <BaseSpin indicator={antIcon1} />
          <BaseSpin indicator={antIcon2} />
          <BaseSpin indicator={antIcon3} />
        </S.Card>
        <S.Card title={t('spinners.customLoading')}>
          <BaseSpace direction="vertical" size={16}>
            <BaseSpin spinning={loading}>
              <BaseAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </BaseSpin>
            <div>
              {t('spinners.loadingState')}
              <BaseSwitch checked={loading} onChange={() => setLoading(!loading)} />
            </div>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('spinners.customLoadingDelay')}>
          <BaseSpace direction="vertical" size={16}>
            <BaseSpin spinning={delayLoading} delay={500}>
              <BaseAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </BaseSpin>
            <div>
              {t('spinners.loadingState')}
              <BaseSwitch checked={delayLoading} onChange={() => setDelayLoading(!delayLoading)} />
            </div>
          </BaseSpace>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default SpinnersPage;
