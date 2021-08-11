import React from 'react';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  grid: {
    top: 0,
    left: '7%',
    right: 0,
    bottom: 0,
  },
  xAxis: [
    {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
  ],
  yAxis: [
    {
      show: false,
      type: 'value',
      min: 10,
      max: 70,
    },
  ],
  series: [
    {
      name: 'Statistics 1',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 1,
        color: theme.colors.chartsSecondaryGradient,
      },
      emphasis: {
        focus: 'series',
      },
      data: [28, 32, 39, 41, 38, 40, 45, 49, 50, 48],
    },
    {
      name: 'Statistics 2',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 1,
        color: theme.colors.chartsPrimaryGradient,
      },
      emphasis: {
        focus: 'series',
      },
      data: [22, 22, 25, 31, 38, 43, 42, 38, 36, 38],
    },
  ],
};

export const ScreeningsChart: React.FC = () => {
  return <Chart option={option} />;
};
