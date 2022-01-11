import { useState, useContext, useMemo } from 'react';
import { Col } from 'antd';
import { Progress } from 'components/common/Progress/Progress';
import { Button, ButtonGroup } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { ThemeContext } from 'styled-components';
import * as S from '../UIComponentsPage.styles';

const ProgressPage: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  const dynamicSuccessColor = useMemo(
    () => (percent === 100 ? theme.colors.main.success : theme.colors.main.primary),
    [percent, theme.colors.main],
  );

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <Col>
      <S.Card title={t('progress.basic')}>
        <Progress percent={30} strokeColor={theme.colors.main.primary} />
        <Progress percent={50} status="active" strokeColor={theme.colors.main.primary} />
        <Progress percent={70} status="exception" strokeColor={theme.colors.main.error} />
        <Progress percent={100} strokeColor={theme.colors.main.success} />
        <Progress percent={50} showInfo={false} strokeColor={theme.colors.main.primary} />
      </S.Card>
      <S.Card title={t('progress.circle')}>
        <Progress type="circle" percent={75} strokeColor={theme.colors.main.primary} />
        <Progress type="circle" percent={70} status="exception" strokeColor={theme.colors.main.error} />
        <Progress type="circle" percent={100} strokeColor={theme.colors.main.success} />
      </S.Card>
      <S.Card title={t('progress.dynamic')}>
        <div>
          <Progress percent={percent} type="circle" strokeColor={dynamicSuccessColor} />
          <Progress percent={percent} strokeColor={dynamicSuccessColor} />
          <ButtonGroup>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </ButtonGroup>
        </div>
      </S.Card>
      <S.Card title={t('progress.dashboard')}>
        <Progress type="dashboard" percent={75} strokeColor={theme.colors.main.primary} />
        <Progress type="dashboard" percent={75} gapDegree={30} strokeColor={theme.colors.main.primary} />
      </S.Card>
      <S.Card title={t('progress.gradient')}>
        <div>
          <Progress
            strokeColor={{
              '0%': theme.commonColors.blue,
              '100%': theme.commonColors.green,
            }}
            percent={99.9}
          />
          <Progress
            strokeColor={{
              from: theme.commonColors.blue,
              to: theme.commonColors.green,
            }}
            percent={99.9}
            status="active"
          />
          <Progress
            type="circle"
            strokeColor={{
              '0%': theme.commonColors.blue,
              '100%': theme.commonColors.green,
            }}
            percent={90}
          />
          <Progress
            type="circle"
            strokeColor={{
              '0%': theme.commonColors.blue,
              '100%': theme.commonColors.green,
            }}
            percent={100}
          />
        </div>
      </S.Card>
    </Col>
  );
};

export default ProgressPage;
