import React, { useContext } from 'react';
import { BaseChart, getDefaultTooltipStyles } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartData, xData } from 'interfaces/interfaces';
import { useResponsive } from '@app/hooks/useResponsive';

interface CovidData {
  title: string;
  data: ChartData;
}

export const CovidChart: React.FC<{ data1: CovidData; data2: CovidData; data3: CovidData; xData: xData }> = ({
  data1,
  data2,
  data3,
  xData,
}) => {
  const theme = useContext(ThemeContext);

  const { isDesktop } = useResponsive();

  const option = {
    color: [
      theme.colors.main.chartPrimaryGradient,
      theme.colors.main.chartSecondaryGradient,
      theme.colors.main.chartAdditionalGradient,
    ],
    legend: {
      left: '10%',
      top: '10%',
      orient: 'vertical',
      textStyle: {
        fontSize: 16,
        padding: 10,
      },
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      data: xData,
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    series: [
      {
        name: data1.title,
        data: data1.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color1, 0.02),
          },
          data: xData && getMarkAreaData(xData),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color1,
        },
      },
      {
        name: data2.title,
        data: data2.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color5, 0.02),
          },
          data: xData && getMarkAreaData(xData),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color5,
        },
      },
      {
        name: data3.title,
        data: data3.data,
        type: 'line',
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color4, 0.02),
          },
          data: xData && getMarkAreaData(xData),
        },
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color: theme.colors.charts.color4,
        },
      },
      {
        data: [
          { name: data1.title, value: data1.data },
          { name: data2.title, value: data2.data },
          { name: data3.title, value: data3.data },
        ],
        label: {
          show: isDesktop,
        },
        type: 'pie',
        radius: '30%',
        center: ['70%', '25%'],
        emphasis: {
          show: false,
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
