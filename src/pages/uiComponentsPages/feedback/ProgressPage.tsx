import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { BaseProgress } from '@app/components/common/BaseProgress/BaseProgress';
import { BaseButton, ButtonGroup } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const ProgressPage: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const { t } = useTranslation();

  const primaryColor = 'var(--primary-color)';
  const secondaryColor = 'var(--secondary-color)';
  const successColor = 'var(--success-color)';
  const errorColor = 'var(--error-color)';

  const dynamicSuccessColor = useMemo(() => (percent === 100 ? successColor : primaryColor), [percent]);

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
          <BaseProgress percent={30} strokeColor={primaryColor} />
          <BaseProgress percent={50} status="active" strokeColor={primaryColor} />
          <BaseProgress percent={70} status="exception" strokeColor={errorColor} />
          <BaseProgress percent={100} strokeColor={successColor} />
          <BaseProgress percent={50} showInfo={false} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <BaseProgress type="circle" percent={75} strokeColor={primaryColor} />
          <BaseProgress type="circle" percent={70} status="exception" strokeColor={errorColor} />
          <BaseProgress type="circle" percent={100} strokeColor={successColor} />
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
          <BaseProgress type="dashboard" percent={75} strokeColor={primaryColor} />
          <BaseProgress type="dashboard" percent={75} gapDegree={30} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.gradient')}>
          <div>
            <BaseProgress
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={99.9}
            />
            <BaseProgress
              strokeColor={{
                from: primaryColor,
                to: secondaryColor,
              }}
              percent={99.9}
              status="active"
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={90}
            />
            <BaseProgress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
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
