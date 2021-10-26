import React, { useContext } from 'react';
import { Card } from '../../common/Card/Card';
import { StatisticsChart } from './StatisticsChart/StatisticsChart';
import { StatisticsInfo } from './StatisticsInfo/StatisticsInfo';
import { Statistic } from '../../../constants/statisticsData';
import * as S from './StatisticsCard.styles';
import { ThemeContext } from 'styled-components';

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
  const themeContext = useContext(ThemeContext);

  return (
    <S.CardWrapper id={title.toLowerCase().replaceAll(' ', '-')}>
      <S.Line color={color} />
      <Card>
        {/* <S.Wrapper>
          <S.Icon color={themeContext.colors.main[color]} component={icon} />
          <StatisticsChart
            color={themeContext.colors.main[color]}
            chartColor={themeContext.colors.main[chartColor]}
            value={value}
          />
          <StatisticsInfo
            color={themeContext.colors.main[color]}
            title={title}
            percent={percent}
            isDowngrade={isDowngrade}
          />
        </S.Wrapper> */}
      </Card>
    </S.CardWrapper>
  );
};
