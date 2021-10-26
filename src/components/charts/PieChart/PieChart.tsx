import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import React from 'react';

export const PieChart: React.FC = () => {
  const option = {
    title: {
      top: 30,
      text: 'Nightingale Chart',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Radius Mode',
        type: 'pie',
        radius: [5, 35],
        center: ['25%', '75%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 33, name: 'rose 2' },
          { value: 28, name: 'rose 3' },
          { value: 22, name: 'rose 4' },
          { value: 20, name: 'rose 5' },
          { value: 15, name: 'rose 6' },
          { value: 12, name: 'rose 7' },
          { value: 10, name: 'rose 8' },
        ],
      },
      {
        name: 'Area Mode',
        type: 'pie',
        radius: [5, 35],
        center: ['75%', '75%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 30, name: 'rose 1' },
          { value: 28, name: 'rose 2' },
          { value: 26, name: 'rose 3' },
          { value: 24, name: 'rose 4' },
          { value: 22, name: 'rose 5' },
          { value: 20, name: 'rose 6' },
          { value: 18, name: 'rose 7' },
          { value: 16, name: 'rose 8' },
        ],
      },
    ],
  };

  return (
    <Card title="Pie chart">
      <Chart option={option} />
    </Card>
  );
};
