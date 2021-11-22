import React, { useContext } from 'react';
import { Chart } from 'components/common/Chart/Chart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { useResponsive } from 'hooks/useResponsive';

const xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ScreeningsChart: React.FC = () => {
  const theme = useContext(ThemeContext);

  const { isTablet: isTabletOrHigher } = useResponsive();

  const option = {
    color: [theme.colors.main.error, theme.colors.main.primary],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      }, // TODO Add formatter
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
        data: xAxisData,
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
          color: theme.colors.main.error,
        },
        areaStyle: {
          opacity: 0.2,
        },
        emphasis: {
          focus: 'series',
        },
        data: [28, 32, 39, 41, 38, 40, 45, 49, 50, 48],
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.main.primary, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
      {
        name: 'Statistics 2',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.main.primary,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.2,
        },
        emphasis: {
          focus: 'series',
        },
        data: [22, 22, 25, 31, 38, 43, 42, 38, 36, 38],
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.main.primary, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
    ],
  };

  return <Chart option={option} {...(isTabletOrHigher && { height: '100%' })} />;
};
