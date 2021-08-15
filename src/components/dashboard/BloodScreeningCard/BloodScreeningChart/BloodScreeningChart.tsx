import React from 'react';
import { EChartsInstance } from 'echarts-for-react';
import { useMediaQuery } from 'react-responsive';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';
import { Dates } from '../../../../constants/Dates';
import { Cell } from '../BloodScreeningTable/BloodScreeningTable';

const months = Dates.getMonths();

interface BloodScreeningChartsProps {
  activeItem: Cell;
}

export const BloodScreeningChart: React.FC<BloodScreeningChartsProps> = ({ activeItem }) => {
  const isTablet = useMediaQuery({ query: media.md });

  const option = {
    color: [theme.colors.error, theme.colors.basicLight],
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
      },
      {
        data: activeItem.data.map((point) => point - 50),
        type: 'line',
        smooth: true,
        showSymbol: false,
      },
    ],
  };

  return <Chart option={option} height={(isTablet && 150) || 100} />;
};
