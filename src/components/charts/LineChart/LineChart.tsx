import React from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { Dates } from 'constants/Dates';

export const LineChart: React.FC = () => {
  const days = Dates.getDays();

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Step Start', 'Step Middle', 'Step End'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: days,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430, 410],
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530, 510],
      },
    ],
  };

  return (
    <Card title="Line chart">
      <Chart option={option} />
    </Card>
  );
};
