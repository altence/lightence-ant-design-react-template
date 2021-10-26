import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Chart } from '../../../common/Chart/Chart';
import { Dates } from '../../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';

export const ActivityChart: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const days = Dates.getDays();

  const { isTablet, isDesktop, isBigScreen } = useResponsive();

  const option = {
    color: themeContext.colors.chartsPrimaryGradient,
    grid: {
      top: (isDesktop && 40) || 30,
      right: (isDesktop && 20) || 10,
      bottom: (isDesktop && 20) || 10,
      left: (isDesktop && 40) || (isTablet && 35) || 30,
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
        color: themeContext.colors.primary,
        fontWeight: 500,
        fontSize: (isBigScreen && 14) || (isDesktop && 12) || 10,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 110,
      interval: 10,
      axisLabel: {
        color: themeContext.colors.basic,
        fontWeight: 500,
        fontSize: (isDesktop && 12) || 10,
      },
    },
    series: [
      {
        barMaxWidth: (isBigScreen && 30) || (isTablet && 21) || 26,
        data: [52, 58, 63, 78, 71, 68, 91],
        type: 'bar',
        itemStyle: {
          borderRadius: (isDesktop && 7) || 5,
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <Chart option={option} height={isDesktop && '100%'} />;
};
