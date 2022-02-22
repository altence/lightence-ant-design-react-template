import React from 'react';
import { useTheme } from 'styled-components';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { ChartData } from '@app/interfaces/interfaces';

interface LineData {
  name: string;
  data: ChartData;
}

interface TotalEarningChartProps {
  xAxisData: number[] | string[];
  firstLine: LineData;
  secondLine: LineData;
}

export const TotalEarningChart: React.FC<TotalEarningChartProps> = ({ xAxisData, firstLine, secondLine }) => {
  const theme = useTheme();

  const option = {
    color: [theme.colors.main.chartPrimaryGradient, theme.colors.main.chartSecondaryGradient],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
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
      },
    ],
    series: [
      {
        name: `${firstLine?.name}`,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color1,
        },
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: firstLine?.data,
      },
      {
        name: `${secondLine?.name}`,
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 1,
        },
        emphasis: {
          focus: 'series',
        },
        data: secondLine?.data,
      },
    ],
  };

  return <BaseChart option={option} width="100%" height={100} />;
};
