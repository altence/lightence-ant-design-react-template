import React from 'react';
import { Chart } from '../../../../components/common/Chart';
import theme from '../../../../styles/theme';

const option = {
  color: theme.colors.primaryGradient,
  grid: {
    top: 30,
    right: 0,
    bottom: 10,
    left: 30,
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: false,
    },
    data: ['Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat', 'Sun'],
    position: 'top',
    axisLabel: {
      color: theme.colors.primary,
      fontWeight: 500,
      fontSize: 14,
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 110,
    interval: 10,
    axisLabel: {
      color: theme.colors.chartLabel,
      fontWeight: 500,
      fontSize: 12,
    },
  },
  series: [
    {
      data: [52, 58, 63, 78, 71, 68, 91],
      type: 'bar',
      itemStyle: {
        barBorderRadius: 7,
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

export const ActivityChart: React.FC = () => {
  return <Chart option={option} />;
};
