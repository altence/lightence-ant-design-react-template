import React from 'react';
import { EChartsOption } from 'echarts';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';

export const HealthChart: React.FC = () => {
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
    legend: {
      left: '60%',
      top: 'center',
      orient: 'vertical',
      icon: 'circle',
      textStyle: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '85%'],
        center: ['30%', 'center'],
        avoidLabelOverlap: false,
        labelLine: false,
        label: {
          show: true,
          position: 'center',
          formatter: (label: EChartsOption) => {
            return `${label.value} percent`;
          },
          backgroundColor: theme.colors.secondary,
          color: theme.colors.primary,
          fontSize: 20,
        },
        data: [
          {
            value: 72,
            name: 'Lifestyle',
          },
          {
            value: 50,
            name: 'Ecology',
          },
          {
            value: 70,
            name: 'Genetics',
          },
          {
            value: 20,
            name: 'Some info',
          },
        ],
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

  return <Chart option={option} />;
};
