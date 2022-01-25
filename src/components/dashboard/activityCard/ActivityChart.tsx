import React from 'react';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { dashboardPaddings } from '@app/components/dashboard/DashboardCard/DashboardCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { Dates } from '@app/constants/Dates';
import { ChartData, ChartSeriesData } from '@app/interfaces/interfaces';

interface ActivityChartProps {
  data: ChartData;
}

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const theme = useTheme();

  const { t } = useTranslation();

  const days = Dates.getDays();

  const { isTablet, isDesktop, isMobile } = useResponsive();

  const size = isDesktop ? 'xl' : isTablet ? 'md' : isMobile ? 'xs' : 'xs';

  const option = {
    color: theme.colors.main.chartPrimaryGradient,
    grid: {
      top: dashboardPaddings[size][0],
      right: dashboardPaddings[size][1],
      bottom: dashboardPaddings[size][1],
      left: dashboardPaddings[size][0],
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
        color: theme.colors.main.primary,
        fontWeight: 500,
        fontSize: 14,
      },
    },
    yAxis: {
      type: 'value',
      min: 1500,
      axisLabel: {
        formatter: '{value} kcal',
        color: theme.colors.text.light,
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

        return `${currentItem.value} ${t('dashboard.activity.kcalBurned')} ${currentItem.name}`;
      },
    },
  };

  return <BaseChart option={option} height="100%" />;
};
