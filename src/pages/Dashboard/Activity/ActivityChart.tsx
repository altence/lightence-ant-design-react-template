import React from 'react';
import { Chart } from '../../../components/common/Chart/Chart';
import theme from '../../../styles/theme';
import { Dates } from '../../../constants/dates';

const days = Dates.getDays();

const option = {
  color: theme.colors.chartsPrimaryGradient,
  grid: {
    top: 50,
    right: 50,
    bottom: 20,
    left: 50,
  },
  xAxis: {
    type: 'category',
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    data: days,
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
      color: theme.colors.basic,
      fontWeight: 500,
      fontSize: 12,
    },
  },
  series: [
    {
      barMaxWidth: 30,
      data: [52, 58, 63, 78, 71, 68, 91],
      type: 'bar',
      itemStyle: {
        borderRadius: 90,
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
