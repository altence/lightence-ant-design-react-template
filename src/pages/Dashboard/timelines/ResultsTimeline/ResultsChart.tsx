import React from 'react';
import { EChartsInstance } from 'echarts-for-react';
import { Chart } from '../../../../components/common/Chart';
import theme from '../../../../styles/theme';
import { Dates } from '../../../../constants/dates';
import { Cell } from './ResultsTable';

const months = Dates.getMonths();
interface ResultsChartsProps {
  activeItem: Cell;
}

export const ResultsChart: React.FC<ResultsChartsProps> = ({ activeItem }) => {
  const option = {
    color: theme.colors.fail,
    grid: {
      top: '50%',
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
    ],
  };

  return <Chart option={option} height="100px" />;
};
