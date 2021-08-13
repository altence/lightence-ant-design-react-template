import React from 'react';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';
import { LinearGradientObject } from 'echarts';

interface StatisticsChartProps {
  value: number;
  color: string;
  chartColor: LinearGradientObject;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({ value, chartColor, color }) => {
  const option = {
    color: [chartColor, theme.colors.basicLight],
    series: [
      {
        type: 'pie',
        radius: ['55%', '70%'],
        label: {
          show: true,
          position: 'center',
          fontSize: '12px',
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

  return <Chart option={option} width="50%" height="100px" />;
};
