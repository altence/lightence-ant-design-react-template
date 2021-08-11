import React from 'react';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';

interface StatisticsChartProps {
  value: number;
  isDowngrade?: boolean;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({ value, isDowngrade }) => {
  const option = {
    color: [
      (isDowngrade && theme.colors.chartsSecondaryGradient) || theme.colors.chartsPrimaryGradient,
      theme.colors.basicLight,
    ],
    series: [
      {
        type: 'pie',
        radius: ['55%', '70%'],
        label: {
          show: true,
          position: 'center',
          fontSize: '18px',
          color: theme.colors.primary,
          formatter: function () {
            return `${value} kg`;
          },
        },
        data: [
          { value, name: value < 50 ? '' : value },
          { value: 100 - value, name: value < 50 ? value : '' },
        ],
        emphasis: {
          show: false,
        },
      },
    ],
  };

  return <Chart option={option} width="50%" height="150px" />;
};
