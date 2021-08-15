import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';
import { LinearGradientObject } from 'echarts';

interface StatisticsChartProps {
  value: number;
  color: string;
  chartColor: LinearGradientObject;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({ value, chartColor, color }) => {
  const isTablet = useMediaQuery({ query: media.md });

  const option = {
    color: [chartColor, theme.colors.basicLight],
    series: [
      {
        type: 'pie',
        radius: ['55%', '70%'],
        label: {
          show: true,
          position: 'center',
          fontSize: '10px',
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

  return <Chart option={option} width={(isTablet && '100%') || '50%'} height={(isTablet && '70px') || '60px'} />;
};
