import React, { useContext } from 'react';
import { EChartsInstance } from 'echarts-for-react';
import { ThemeContext } from 'styled-components';
import { Chart } from '../../../common/Chart/Chart';
import { Dates } from '../../../../constants/Dates';
import { Cell } from '../BloodScreeningTable/BloodScreeningTable';
import { useResponsive } from 'hooks/useResponsive';

interface BloodScreeningChartsProps {
  activeItem: Cell;
}

export const BloodScreeningChart: React.FC<BloodScreeningChartsProps> = ({ activeItem }) => {
  const themeContext = useContext(ThemeContext);

  const { isTablet, isBigScreen } = useResponsive();

  const months = Dates.getMonths();

  const option = {
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
          color: themeContext.colors.main.error,
        },
      },
    ],
  };

  return <Chart option={option} height={(isBigScreen && 200) || (isTablet && 150) || 100} />;
};
