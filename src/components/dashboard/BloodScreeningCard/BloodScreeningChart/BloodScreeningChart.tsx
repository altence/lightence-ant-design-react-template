import React from 'react';
import { EChartsInstance } from 'echarts-for-react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme from '../../../../styles/theme';
import { Dates } from '../../../../constants/Dates';
import { Cell } from '../BloodScreeningTable/BloodScreeningTable';

const months = Dates.getMonths();

interface BloodScreeningChartsProps {
  activeItem: Cell;
}

export const BloodScreeningChart: React.FC<BloodScreeningChartsProps> = ({ activeItem }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

  const option = {
    color: (isTablet && theme.colors.chartsErrorGradient) || theme.colors.error,
    grid: {
      top: '30%',
      bottom: 0,
      left: 0,
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (label: EChartsInstance) {
        return `${label[0].axisValue}`;
      },
      axisPointer: {
        show: false,
      },
    },
    xAxis: {
      type: 'category',
      data: months,
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: activeItem.data,
        type: 'line',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: (isTablet && 0.4) || 0,
        },
        lineStyle: {
          width: 2,
          color: theme.colors.error,
        },
      },
    ],
  };

  return <Chart option={option} height={(isBigScreen && 200) || (isTablet && 150) || 100} />;
};
