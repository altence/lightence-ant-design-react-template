import React, { useContext } from 'react';
import { BaseChart, getDefaultTooltipStyles } from 'components/common/charts/BaseChart';
import { getMarkAreaData } from 'utils/utils';
import { ThemeContext } from 'styled-components';
import { hexToRGB } from 'utils/utils';
import { ChartSeriesData } from 'interfaces/interfaces';
import { useTranslation } from 'react-i18next';

interface UserStatistics {
  name: string;
  data: number[] | string[];
}

interface ScreeningsChartProps {
  firstUser?: UserStatistics;
  secondUser?: UserStatistics;
}

const xAxisData = Array.from({ length: 30 }, (_, i) => i + 1);

export const ScreeningsChart: React.FC<ScreeningsChartProps> = ({ firstUser, secondUser }) => {
  const theme = useContext(ThemeContext);

  const { t } = useTranslation();

  const option = {
    color: [theme.colors.charts.chartPrimaryGradient, theme.colors.charts.chartSecondaryGradient],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
      formatter: (data: ChartSeriesData) => {
        const firstItem = data[1];
        const secondItem = data[0];

        return `${firstItem.seriesName}: ${firstItem.value}%  - ${t('common.day')} ${firstItem.name} <br/>
                ${secondItem.seriesName}: ${secondItem.value}% - ${t('common.day')} ${secondItem.name}
        `;
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
        min: 0,
        max: 100,
      },
    ],
    series: [
      {
        name: `${firstUser?.name}`,
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
        data: firstUser?.data,
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color1, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
      {
        name: `${secondUser?.name}`,
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
        data: secondUser?.data,
        markArea: {
          itemStyle: {
            color: hexToRGB(theme.colors.charts.color1, 0.01),
          },
          data: getMarkAreaData(xAxisData),
        },
      },
    ],
  };

  return <BaseChart option={option} />;
};
