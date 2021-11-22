import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Chart } from '../../../common/Chart/Chart';
import { Dates } from '../../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';

export const ActivityChart: React.FC = () => {
  const theme = useContext(ThemeContext);

  const days = Dates.getDays();

  const { isTablet, isDesktop, isBigScreen } = useResponsive();

  const option = {
    color: theme.colors.main.chartPrimaryGradient,
    grid: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
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
        data: [41, 45, 52, 63, 58, 55, 71],
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

  return <Chart option={option} />;
};
