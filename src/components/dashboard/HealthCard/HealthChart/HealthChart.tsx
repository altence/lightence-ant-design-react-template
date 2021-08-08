import { EChartsOption } from 'echarts';
import React from 'react';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';

const chartData = [
  { value: 72, name: 'Lifestyle' },
  { value: 50, name: 'Ecology' },
  { value: 70, name: 'Genetics' },
  { value: 20, name: 'Any info' },
];

const option = {
  color: [
    theme.colors.chartsSecondaryGradient,
    theme.colors.chartsAdditionallyGradient,
    theme.colors.chartsPrimaryGradient,
    theme.colors.basicLight,
  ],
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
      data: chartData,
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
  return <Chart option={option} />;
};
