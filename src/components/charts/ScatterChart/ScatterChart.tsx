import React, { useContext } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

const data = [
  [170.0, 59.0],
  [159.1, 47.6],
  [166.0, 69.8],
  [176.2, 66.8],
  [160.2, 75.2],
  [172.5, 55.2],
  [170.9, 54.2],
  [172.9, 62.5],
  [153.4, 42.0],
  [160.0, 50.0],
  [147.2, 49.8],
  [168.2, 49.2],
  [175.0, 73.2],
  [157.0, 47.8],
  [167.6, 68.8],
  [159.5, 50.6],
  [175.0, 82.5],
  [166.8, 57.2],
  [176.5, 87.8],
  [170.2, 72.8],
  [174.0, 54.5],
  [173.0, 59.8],
  [179.9, 67.3],
  [170.5, 67.8],
  [160.0, 47.0],
];

const markLineOpt = {
  animation: false,
  lineStyle: {
    width: 0,
  },
  data: [
    [
      {
        coord: [0, 3],
        symbol: 'none',
      },
      {
        coord: [20, 13],
        symbol: 'none',
      },
    ],
  ],
};

const defaultOption = {
  grid: {
    top: 10,
    right: 30,
    bottom: 0,
    left: 15,
    containLabel: true,
  },
  tooltip: {
    showDelay: 0,
    // eslint-disable-next-line
    formatter: function (params: any) {
      if (params.value.length > 1) {
        return params.value[0] + 'cm ' + params.value[1] + 'kg ';
      } else {
        return params.name + ' : ' + params.value + 'kg ';
      }
    },
    axisPointer: {
      show: true,
      type: 'cross',
      lineStyle: {
        type: 'dashed',
        width: 1,
      },
    },
  },
  xAxis: {
    gridIndex: 0,
    min: 140,
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} kg',
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    gridIndex: 0,
    min: 40,
    type: 'value',
    scale: true,
    axisLabel: {
      formatter: '{value} cm',
    },
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      type: 'scatter',
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: data,
      markLine: markLineOpt,
    },
  ],
};

export const ScatterChart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const option = { ...defaultOption, color: theme.colors.main.primary };

  return (
    <Card padding="0 0 1.875rem" title={t('charts.scatter')}>
      <Chart option={option} />
    </Card>
  );
};
