import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BaseChart } from '../../../common/charts/BaseChart';
import { Dates } from '../../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';
import { dashboardPaddings } from 'components/dashboard/DashboardCard/DashboardCard';
import { ChartData } from 'interfaces/interfaces';

interface ActivityChartProps {
  data: ChartData;
}

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const theme = useContext(ThemeContext);

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
      min: 0,
      max: 80,
      interval: 10,
      axisLabel: {
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
      trigger: 'axis',
    },
  };

  return <BaseChart option={option} {...(isTablet && { height: '100%' })} />;
};
