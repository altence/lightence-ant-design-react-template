import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress } from '@app/components/common/Progress/Progress';
import { Button, ButtonGroup } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

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
      <Col>
        <S.Card title={t('progress.basic')}>
          <Progress percent={30} strokeColor={primaryColor} />
          <Progress percent={50} status="active" strokeColor={primaryColor} />
          <Progress percent={70} status="exception" strokeColor={errorColor} />
          <Progress percent={100} strokeColor={successColor} />
          <Progress percent={50} showInfo={false} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <Progress type="circle" percent={75} strokeColor={primaryColor} />
          <Progress type="circle" percent={70} status="exception" strokeColor={errorColor} />
          <Progress type="circle" percent={100} strokeColor={successColor} />
        </S.Card>
        <S.Card title={t('progress.dynamic')}>
          <div>
            <Progress percent={percent} type="circle" strokeColor={dynamicSuccessColor} />
            <Progress percent={percent} strokeColor={dynamicSuccessColor} />
            <ButtonGroup>
              <Button onClick={decrease} icon={<MinusOutlined />} />
              <Button onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </div>
        </S.Card>
        <S.Card title={t('progress.medical-dashboard')}>
          <Progress type="dashboard" percent={75} strokeColor={primaryColor} />
          <Progress type="dashboard" percent={75} gapDegree={30} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.gradient')}>
          <div>
            <Progress
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={99.9}
            />
            <Progress
              strokeColor={{
                from: primaryColor,
                to: secondaryColor,
              }}
              percent={99.9}
              status="active"
            />
            <Progress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={90}
            />
            <Progress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={100}
            />
          </div>
        </S.Card>
      </Col>
    </>
  );
};

export default ProgressPage;
