import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { Col, Row } from 'antd';
import { StatisticsInfo } from './StatisticsInfo/StatisticsInfo';
import { StatisticsProgress } from './StatisticsProgress/StatisticsProgress';
import * as S from './StatisticsCard.styles';
import { StatisticColor } from 'constants/config/statistics';
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

  const { t } = useTranslation();

  return (
    <S.StatisticCard id={name.toLowerCase().replaceAll(' ', '-')} color={theme.colors.main[color] as StatisticColor}>
      <Row wrap={false} gutter={[5, 0]}>
        <Col>
          <S.Icon component={Icon} />
        </Col>

        <Col flex={1}>
          <S.StatisticsRow justify="space-between" align="middle" wrap={false} gutter={[5, 0]}>
            <Col>
              <StatisticsInfo name={t(name)} value={value} prevValue={prevValue} />
            </Col>

            <Col>
              <StatisticsProgress color={theme.colors.main[color] as StatisticColor} unit={unit} value={value} />
            </Col>
          </S.StatisticsRow>
        </Col>
      </Row>
    </S.StatisticCard>
  );
};
