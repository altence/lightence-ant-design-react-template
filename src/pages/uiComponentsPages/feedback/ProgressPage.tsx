import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { BaseProgress } from '@app/components/common/BaseProgress/BaseProgress';
import { BaseButton, ButtonGroup } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const ProgressPage: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const { t } = useTranslation();
  const theme = useTheme();

  const dynamicSuccessColor = useMemo(() => (percent === 100 ? theme.success : theme.primary), [percent, theme]);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decrease = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <PageTitle>{t('common.progress')}</PageTitle>
      <BaseCol>
        <S.Card title={t('progress.basic')}>
          <BaseProgress percent={30} strokeColor={theme.primary} />
          <BaseProgress percent={50} status="active" strokeColor={theme.primary} />
          <BaseProgress percent={70} status="exception" strokeColor={theme.error} />
          <BaseProgress percent={100} strokeColor={theme.success} />
          <BaseProgress percent={50} showInfo={false} strokeColor={theme.primary} />
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <BaseProgress type="circle" percent={75} strokeColor={theme.primary} />
          <BaseProgress type="circle" percent={70} status="exception" strokeColor={theme.error} />
          <BaseProgress type="circle" percent={100} strokeColor={theme.success} />
        </S.Card>
        <S.Card title={t('progress.dynamic')}>
          <div>
            <BaseProgress percent={percent} type="circle" strokeColor={dynamicSuccessColor} />
            <BaseProgress percent={percent} strokeColor={dynamicSuccessColor} />
            <ButtonGroup>
              <BaseButton onClick={decrease} icon={<MinusOutlined />} />
              <BaseButton onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </div>
        </S.Card>
        <S.Card title={t('progress.medical-dashboard')}>
          <BaseProgress type="dashboard" percent={75} strokeColor={theme.primary} />
          <BaseProgress type="dashboard" percent={75} gapDegree={30} strokeColor={theme.primary} />
        </S.Card>
        <S.Card title={t('progress.gradient')}>
          <div>
            <BaseProgress
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={99.9}
            />
            <BaseProgress
              strokeColor={{
                from: theme.primary,
                to: theme.secondary,
              }}
              percent={99.9}
              status="active"
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={90}
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': theme.primary,
                '100%': theme.secondary,
              }}
              percent={100}
            />
          </div>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default ProgressPage;
