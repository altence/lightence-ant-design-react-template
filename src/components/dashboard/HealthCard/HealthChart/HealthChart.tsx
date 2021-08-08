import React from 'react';
import { EChartsOption } from 'echarts';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';
import { healthChartData } from '../../../../constants/healthChart';

const option = {
  color: healthChartData.map((item) => item.chartColor),
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      radius: [80, 120],
      center: ['50%', '50%'],
      labelLine: false,
      label: {
        show: true,
        position: 'center',
        formatter: (label: EChartsOption) => {
          return `${label.value} percent`;
        },
        backgroundColor: theme.colors.secondary,
        color: theme.colors.primary,
        fontSize: 24,
      },
      data: healthChartData.map((item) => {
        return {
          value: item.value,
          name: item.title,
        };
      }),
      emphasis: {
        label: {
          show: true,
          backgroundColor: theme.colors.secondary,
          color: theme.colors.primary,
        },
      },
    },
  ],
};

export const HealthChart: React.FC = () => {
  return <Chart option={option} width="300px" height="300px" />;
};
