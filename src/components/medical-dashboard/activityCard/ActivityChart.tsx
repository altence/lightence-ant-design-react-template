import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { dashboardPaddings } from '@app/components/medical-dashboard/DashboardCard/DashboardCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { Dates } from '@app/constants/Dates';
import { ChartData, ChartSeriesData } from '@app/interfaces/interfaces';
import { useTheme } from 'styled-components';
import { graphic } from 'echarts';

interface ActivityChartProps {
  data: ChartData;
}

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const theme = useTheme();

  const { t } = useTranslation();

  const days = Dates.getDays();

  const { breakpoint } = useResponsive();

  const option = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: 'rgba(51, 156, 253, 0.7)',
      },
      {
        offset: 1,
        color: 'rgba(51, 156, 253, 0.15)',
      },
    ]),
    grid: {
      top: dashboardPaddings[breakpoint][0],
      right: dashboardPaddings[breakpoint][1],
      bottom: dashboardPaddings[breakpoint][1],
      left: dashboardPaddings[breakpoint][0],
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: days,
      position: 'top',
      axisLabel: {
        color: theme.primary,
        fontWeight: 500,
        fontSize: 14,
      },
    },
    yAxis: {
      type: 'value',
      min: 1500,
      axisLabel: {
        formatter: '{value} kcal',
        color: theme.textLight,
        fontWeight: 500,
        fontSize: 14,
      },
    },
    series: [
      {
        barMaxWidth: 26,
        data: data,
        type: 'bar',
        itemStyle: {
          borderRadius: 7,
        },
      },
    ],
    tooltip: {
      ...getDefaultTooltipStyles(theme),
      trigger: 'axis',
      formatter: (data: ChartSeriesData) => {
        const currentItem = data[0];

        return `${currentItem.value} ${t('medical-dashboard.activity.kcalBurned')} ${currentItem.name}`;
      },
    },
  };

  return <BaseChart option={option} height="100%" />;
};
