import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { ThemeContext } from 'styled-components';

export const BarAnimationDelayChart: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState<{ data1: number[]; data2: number[]; xAxisData: string[] }>({
    data1: [],
    data2: [],
    xAxisData: [],
  });
  useEffect(() => {
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        xAxisData.push('A' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
      setData({ data1, data2, xAxisData });
    }, 200);
  }, []);
  const option = {
    title: {
      text: 'Bar Animation Delay',
      textStyle: {
        fontSize: theme.commonFontSizes.xxl,
        fontWeight: theme.commonFontWeight.bold,
        color: theme.colors.text.main,
        lineHeight: 31,
      },
      left: 20,
    },
    legend: {
      data: ['bar1', 'bar2'],
      left: 20,
      top: 40,
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 0,
      top: 85,
      containLabel: true,
    },
    tooltip: {},
    xAxis: {
      data: data.xAxisData,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: 'bar1',
        type: 'bar',
        data: data.data1,
        color: '#FFB155',
        emphasis: {
          focus: 'series',
        },
        animationDelay: function (idx: number) {
          return idx * 10;
        },
      },
      {
        name: 'bar2',
        type: 'bar',
        data: data.data2,
        color: '#89DCA0',
        emphasis: {
          focus: 'series',
        },
        animationDelay: function (idx: number) {
          return idx * 10 + 100;
        },
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx: number) {
      return idx * 5;
    },
  };
  return (
    <Card padding="30px 0">
      <Chart option={option} height={'100%'} />
    </Card>
  );
};
