import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';

export const ScreeningsChart: React.FC = () => {
  const isDesktop = useMediaQuery({ query: media.xl });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      top: 0,
      left: 48,
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
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: theme.colors.error,
        },
        areaStyle: {
          opacity: 1,
          color: theme.colors.chartsSecondaryLightGradient,
        },
        emphasis: {
          focus: 'series',
        },
        data: [28, 32, 39, 41, 38, 40, 45, 49, 50, 48],
        markArea: {
          itemStyle: {
            color: theme.colors.primaryAlpha,
          },
          data: [
            [
              {
                xAxis: '1',
              },
              {
                xAxis: '2',
              },
            ],
            [
              {
                xAxis: '3',
              },
              {
                xAxis: '4',
              },
            ],
            [
              {
                xAxis: '5',
              },
              {
                xAxis: '6',
              },
            ],
            [
              {
                xAxis: '7',
              },
              {
                xAxis: '8',
              },
            ],
            [
              {
                xAxis: '9',
              },
              {
                xAxis: '10',
              },
            ],
          ],
        },
      },
      {
        name: 'Statistics 2',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.primary,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
          color: theme.colors.chartsPrimaryLightGradient,
        },
        emphasis: {
          focus: 'series',
        },
        data: [22, 22, 25, 31, 38, 43, 42, 38, 36, 38],
      },
    ],
  };

  return <Chart option={option} height={(isDesktop && '250px') || '200px'} />;
};
