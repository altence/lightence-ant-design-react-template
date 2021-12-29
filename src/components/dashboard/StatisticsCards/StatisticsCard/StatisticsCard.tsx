import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { Col, Row } from 'antd';
import { StatisticsInfo } from './StatisticsInfo/StatisticsInfo';
import { StatisticsProgress } from './StatisticsProgress/StatisticsProgress';
import { StatisticColor } from 'constants/config/statistics';
import * as S from './StatisticsCard.styles';
import { useResponsive } from 'hooks/useResponsive';

interface StatisticsCardProps {
  name: string;
  value: number;
  prevValue: number;
  color: StatisticColor;
  unit: 'kg';
  Icon: React.FC;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ name, value, prevValue, color, unit, Icon }) => {
  const theme = useContext(ThemeContext);

  const { isTablet: isTabletOrHigher } = useResponsive();

  const { t } = useTranslation();

  return (
    <S.StatisticCard padding={'1rem'} color={theme.colors.main[color] as StatisticColor}>
      <Row wrap={false} gutter={[isTabletOrHigher ? 10 : 5, 0]}>
        <Col>
          <S.IconWrapper>
            <S.Icon component={Icon} />
          </S.IconWrapper>
        </Col>

        <Col flex={1}>
          <Row justify="space-between" align="middle" wrap={false}>
            <Col>
              <StatisticsInfo name={t(name)} value={value} prevValue={prevValue} />
            </Col>

            <Col>
              <StatisticsProgress color={theme.colors.main[color] as StatisticColor} unit={unit} value={value} />
            </Col>
          </Row>
        </Col>
      </Row>
    </S.StatisticCard>
  );
};
