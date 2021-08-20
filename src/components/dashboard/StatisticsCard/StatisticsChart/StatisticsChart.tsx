import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';
import { LinearGradientObject } from 'echarts';

interface StatisticsChartProps {
  value: number;
  color: string;
  chartColor: LinearGradientObject;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({ value, chartColor, color }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

  const option = {
    color: [chartColor, theme.colors.basicLight],
    series: [
      {
        type: 'pie',
        radius: ['70%', '95%'],
        label: {
          show: true,
          position: 'center',
          fontSize: (isBigScreen && '24px') || (isTablet && '14px') || '12px',
          color,
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

  return (
    <Chart
      option={option}
      width={(isTablet && !isDesktop && '100%') || '50%'}
      height={(isBigScreen && '120px') || (isTablet && '70px') || '60px'}
    />
  );
};
