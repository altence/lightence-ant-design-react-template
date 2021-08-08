import React from 'react';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import * as S from './StatisticsCard.styles';
import { StatisticsInfo } from './StatisticsInfo/StatisticsInfo';
import { Card } from '../../common/Card/Card';

interface StatisticsCardProps {
  value: number;
  percent: number;
  icon: React.FC;
  title: string;
  isDowngrade?: boolean;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ value, percent, icon, title, isDowngrade }) => {
  return (
    <Card $small>
      <S.Wrapper>
        <S.Icon component={icon} />
        <StatisticsChart value={value} isDowngrade={isDowngrade} />
        <StatisticsInfo title={title} percent={percent} isDowngrade={isDowngrade} />
      </S.Wrapper>
    </Card>
  );
};
