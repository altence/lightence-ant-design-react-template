import React, { useContext } from 'react';
import { BaseChart } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { useResponsive } from 'hooks/useResponsive';

interface UserStatistics {
  name: string;
  data: number[];
}

interface ScreeningsChartProps {
  firstUser: UserStatistics;
  secondUser: UserStatistics;
}

const xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const ScreeningsChart: React.FC<ScreeningsChartProps> = ({ firstUser, secondUser }) => {
  const theme = useContext(ThemeContext);

  const { isTablet: isTabletOrHigher } = useResponsive();

  const option = {
    color: [theme.colors.main.chartPrimaryGradient, theme.colors.main.chartSecondaryGradient],
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
        name: `${firstUser?.name} statistics`,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: theme.colors.main.primary,
        },
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: firstUser?.data,
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.main.primary, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
      {
        name: `${secondUser?.name} statistics`,
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.main.error,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: secondUser?.data,
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.main.primary, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
    ],
  };

  return <BaseChart option={option} {...(isTabletOrHigher && { height: '100%' })} />;
};
