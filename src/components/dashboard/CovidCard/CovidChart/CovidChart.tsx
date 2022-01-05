import React, { useContext } from 'react';
import { BaseChart, getDefaultTooltipStyles } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartData, xData } from 'interfaces/interfaces';
import { useTranslation } from 'react-i18next';

export const CovidChart: React.FC<{ data: ChartData; data2: ChartData; data3: ChartData; xData: xData }> = ({
  data,
  data2,
  data3,
  xData,
}) => {
  const theme = useContext(ThemeContext);

  const { t } = useTranslation();

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
        name: t('dashboard.covid.casesPerDay'),
        data,
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
        name: t('dashboard.covid.deaths'),
        data: data2,
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
        name: t('dashboard.covid.recovered'),
        data: data3,
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
    ],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
    },
  };

  return <BaseChart option={option} height="100%" />;
};
