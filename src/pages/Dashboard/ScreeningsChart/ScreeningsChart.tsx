import React from 'react';
import { Chart } from '../../../components/common/Chart';
import theme from '../../../styles/theme';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  grid: {
    top: 0,
    left: 0,
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
      max: 200,
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
        color: theme.colors.echartsSecondaryGradient,
      },
      emphasis: {
        focus: 'series',
      },
      data: [100, 80, 75, 100, 95, 90, 100, 110, 115, 120],
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
        color: theme.colors.echartsPrimaryGradient,
      },
      emphasis: {
        focus: 'series',
      },
      data: [80, 75, 70, 65, 70, 100, 95, 90, 80, 100],
    },
  ],
};

export const ScreeningsChart: React.FC = () => {
  return <Chart option={option} />;
};
