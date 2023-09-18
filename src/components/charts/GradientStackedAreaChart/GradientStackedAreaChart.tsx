import { useTranslation } from 'react-i18next';
import * as echarts from 'echarts';
import { BaseChart } from '@app/components/common/charts/BaseChart';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useTheme } from 'styled-components';

export const GradientStackedAreaChart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: theme.chartTooltipLabel,
        },
      },
    },
    legend: {
      data: [`coal`, `hydro`, `nuclear`, `gas`, `oil`].map((item) => t(`charts.${item}`)),
      top: 0,
      left: 10,
      textStyle: {
        color: theme.textMain,
      },
    },
    grid: {
      top: 80,
      left: 20,
      right: 20,
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Canada', 'China', 'Russia', 'Australia', 'Germany', 'France'],
        axisLabel: {
          fontSize: theme.fontSizes.xxs,
          fontWeight: theme.fontWeights.light,
          color: theme.primary,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'TWh',
        axisLabel: {
          fontSize: theme.fontSizes.xxs,
          fontWeight: theme.fontWeights.light,
          color: theme.textMain,
        },
      },
    ],
    series: [
      {
        name: t('charts.coal'),
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
              color: theme.chartColor1,
            },
            {
              offset: 1,
              color: theme.chartColor1Tint,
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: t('charts.hydro'),
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
              color: theme.chartColor2,
            },
            {
              offset: 0.82,
              color: theme.chartColor2Tint,
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: t('charts.nuclear'),
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
              color: theme.chartColor3,
            },
            {
              offset: 0.65,
              color: theme.chartColor3Tint,
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: t('charts.gas'),
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
              color: theme.chartColor4,
            },
            {
              offset: 1,
              color: theme.chartColor4Tint,
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: t('charts.oil'),
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
              color: theme.chartColor5,
            },
            {
              offset: 1,
              color: theme.chartColor5Tint,
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
    <BaseCard padding={theme.chartsCardPadding} title={t('charts.gradientLabel')}>
      <BaseChart option={option} />
    </BaseCard>
  );
};
