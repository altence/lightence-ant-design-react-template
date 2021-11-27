import { useContext } from 'react';
import { Chart } from 'components/common/Chart/Chart';
import * as echarts from 'echarts';
import { Card } from 'components/common/Card/Card';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

export const GradientStackedAreaChart: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  const option = {
    color: ['#01509A', '#35A0DC', '#FFDA92', '#31A652', '#FF5252'],
    title: {
      text: t('charts.gradientLabel'),
      left: '1.5%',
      textStyle: {
        fontSize: theme.commonFontSizes.xxl,
        fontWeight: theme.commonFontWeight.bold,
        color: theme.colors.text.main,
        lineHeight: 31,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: [
        `${t('charts.line')}1`,
        `${t('charts.line')}2`,
        `${t('charts.line')}3`,
        `${t('charts.line')}4`,
        `${t('charts.line')}5`,
      ],
      top: '12%',
      left: '1%',
      textStyle: {
        fontSize: theme.commonFontSizes.xxs,
        fontWeight: theme.commonFontWeight.light,
        color: theme.colors.text.main,
      },
    },
    grid: {
      left: 5,
      right: 20,
      bottom: 0,
      top: 90,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          t('charts.mon'),
          t('charts.tue'),
          t('charts.wed'),
          t('charts.thu'),
          t('charts.fri'),
          t('charts.sat'),
          t('charts.sun'),
        ],
        axisLabel: {
          fontSize: theme.commonFontSizes.xxs,
          fontWeight: theme.commonFontWeight.light,
          color: theme.colors.main.primary,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: theme.commonFontSizes.xxs,
          fontWeight: theme.commonFontWeight.light,
          color: theme.colors.text.main,
        },
      },
    ],
    series: [
      {
        name: `${t('charts.line')}1`,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#01509A',
            },
            {
              offset: 1,
              color: '#2983D8',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: `${t('charts.line')}2`,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#35A0DC',
            },
            {
              offset: 0.82,
              color: '#67C5FA',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: `${t('charts.line')}3`,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#FFDA92',
            },
            {
              offset: 0.65,
              color: '#FFA800',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: `${t('charts.line')}4`,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#89DCA0',
            },
            {
              offset: 1,
              color: '#31A652',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: `${t('charts.line')}5`,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0.4,
              color: '#FF5252',
            },
            {
              offset: 1,
              color: '#FFC1C1',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 302, 181, 234, 210, 290, 150],
      },
    ],
  };

  return (
    <Card padding="1.875rem 0">
      <Chart option={option} height={'100%'} />
    </Card>
  );
};
