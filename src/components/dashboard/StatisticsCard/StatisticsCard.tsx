import React from 'react';
import { Card } from '../../common/Card/Card';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import { StatisticsInfo } from './StatisticsInfo/StatisticsInfo';
import { Statistic } from '../../../constants/statisticsData';
import * as S from './StatisticsCard.styles';

type StatisticsCardProps = Omit<Statistic, 'id'>;

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  value,
  percent,
  icon,
  name: title,
  isDowngrade,
  color,
  chartColor,
}) => {
  return (
    <S.CardWrapper id={title.toLowerCase().replaceAll(' ', '-')}>
      <S.Line color={color} />
      <Card>
        <S.Wrapper>
          <S.Icon color={color} component={icon} />
          <StatisticsChart color={color} chartColor={chartColor} value={value} />
          <StatisticsInfo color={color} title={title} percent={percent} isDowngrade={isDowngrade} />
        </S.Wrapper>
      </Card>
    </S.CardWrapper>
  );
};
