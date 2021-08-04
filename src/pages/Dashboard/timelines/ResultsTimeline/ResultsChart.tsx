import React from 'react';
import { EChartsInstance } from 'echarts-for-react';
import { Chart } from '../../../../components/common/Chart';
import theme from '../../../../styles/theme';
import { Dates } from '../../../../constants/dates';

const months = Dates.getMonths();

const dataValue = [410, 466, 455, 467, 649, 670, 620, 600, 500, 400, 500, 700];

console.log(dataValue.map((el) => el / 2));

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
      data: dataValue,
      type: 'line',
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const ResultsChart: React.FC = () => {
  return <Chart option={option} height="100px" />;
};
