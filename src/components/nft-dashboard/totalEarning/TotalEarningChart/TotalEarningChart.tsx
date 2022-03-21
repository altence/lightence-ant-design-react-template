import React from 'react';
import { useTheme } from 'styled-components';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { ChartData, ChartSeriesData } from '@app/interfaces/interfaces';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';

interface LineData {
  data: ChartData;
}

interface TotalEarningChartProps {
  xAxisData: number[] | string[];
  earningData: LineData;
}

export const TotalEarningChart: React.FC<TotalEarningChartProps> = ({ xAxisData, earningData }) => {
  const theme = useTheme();

  const option = {
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
      crossStyle: {
        color: 'red',
      },
      formatter: (data: ChartSeriesData) => {
        const currentSeries = data[0];

        return `${currentSeries.name} - ${getCurrencyPrice(formatNumberWithCommas(currentSeries.value), 'USD')}`;
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
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 3,
          color: theme.colors.charts.color3,
        },
        emphasis: {
          focus: 'series',
        },
        data: earningData?.data,
      },
    ],
  };

  return <BaseChart option={option} width="100%" height={75} />;
};
