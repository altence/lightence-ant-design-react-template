import React from 'react';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';
import { Dates } from '../../../../constants/Dates';

const days = Dates.getDays();

export const ActivityChart: React.FC = () => {
  const option = {
    color: theme.colors.chartsPrimaryGradient,
    grid: {
      top: 30,
      right: 10,
      bottom: 10,
      left: 30,
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
        fontSize: 10,
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
        fontSize: 10,
      },
    },
    series: [
      {
        barMaxWidth: 26,
        data: [52, 58, 63, 78, 71, 68, 91],
        type: 'bar',
        itemStyle: {
          borderRadius: 5,
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <Chart option={option} />;
};
