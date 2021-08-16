import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';
import { Dates } from '../../../../constants/Dates';

const days = Dates.getDays();

export const ActivityChart: React.FC = () => {
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });

  const option = {
    color: theme.colors.chartsPrimaryGradient,
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
        color: theme.colors.primary,
        fontWeight: 500,
        fontSize: (isDesktop && 12) || 10,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 110,
      interval: 10,
      axisLabel: {
        color: theme.colors.basic,
        fontWeight: 500,
        fontSize: (isDesktop && 12) || 10,
      },
    },
    series: [
      {
        barMaxWidth: (isTablet && 21) || 26,
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

  return <Chart option={option} height={(isDesktop && '100%') || '200px'} />;
};
