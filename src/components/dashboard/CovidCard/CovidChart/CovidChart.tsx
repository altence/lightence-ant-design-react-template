import React from 'react';
import { useTheme } from 'styled-components';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { getMarkAreaData, hexToRGB } from '@app/utils/utils';
import { ChartData, xData } from '@app/interfaces/interfaces';

interface CovidData {
  title: string;
  data: ChartData;
}

export const CovidChart: React.FC<{
  confirmed: CovidData;
  deaths: CovidData;
  dateArr: xData;
}> = ({ confirmed, deaths, dateArr }) => {
  const theme = useTheme();

  const option = {
    color: [
      theme.colors.main.chartPrimaryGradient,
      theme.colors.main.chartSecondaryGradient,
      theme.colors.main.chartAdditionalGradient,
    ],
    grid: [
      {
        top: 10,
        left: 10,
        right: 0,
        height: '50%',
        containLabel: true,
      },
      {
        left: 26.5,
        right: 0,
        top: '50%',
        height: '45%',
        containLabel: true,
      },
    ],
    xAxis: [
      {
        show: false,
        type: 'category',
        boundaryGap: false,
        data: dateArr,
      },
      {
        gridIndex: 1,
        show: false,
        type: 'category',
        boundaryGap: false,
        data: dateArr,
        position: 'top',
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
      {
        gridIndex: 1,
        type: 'value',
        inverse: true,
      },
    ],
    series: [
      {
        name: confirmed.title,
        data: confirmed.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color1, 0.02),
          },
          data: dateArr && getMarkAreaData(dateArr),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color1,
        },
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: deaths.title,
        data: deaths.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color5, 0.02),
          },
          data: dateArr && getMarkAreaData(dateArr),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color5,
        },
      },
    ],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
    },
  };

  return <BaseChart option={option} height="100%" />;
};
