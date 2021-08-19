import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { EChartsOption } from 'echarts';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';

const legendDescription = [
  'Without new treatments, the W.H.O. says, the number of new cancer patients.',
  'Without new treatments, the W.H.O. says, the number of new cancer patients.',
  'Without new treatments, the W.H.O. says, the number of new cancer patients.',
  'Without new treatments, the W.H.O. says, the number of new cancer patients.',
];

export const HealthChart: React.FC = () => {
  const isMobile = useMediaQuery({ query: media.xs });
  const MobileTablet = useMediaQuery({ query: '(min-width: 545px' });
  const isTablet = useMediaQuery({ query: media.md });
  const TabletDesktop = useMediaQuery({ query: '(min-width: 1000px' });
  const isDesktop = useMediaQuery({ query: media.xl });
  const DesktopBigScreen = useMediaQuery({ query: '(min-width: 1600px' });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  const option = {
    color: [
      theme.colors.chartsErrorGradient,
      theme.colors.chartsAccentGradient,
      theme.colors.chartsPrimaryGradient,
      theme.colors.basicLight,
    ],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      left: '50%',
      top: 'center',
      orient: 'vertical',
      itemWidth: (isBigScreen && 20) || 13,
      itemHeight: (isBigScreen && 20) || 13,
      itemGap: 15,
      icon: (isBigScreen && 'roundRect') || 'circle',
      textStyle: {
        padding: 5,
        fontSize: (DesktopBigScreen && 14) || (isDesktop && 10) || (TabletDesktop && 14) || (isTablet && 12) || 10,
        width:
          (DesktopBigScreen && 350) ||
          (isDesktop && 230) ||
          (TabletDesktop && 400) ||
          (isTablet && 300) ||
          (MobileTablet && 220) ||
          150,
        overflow: 'break',
      },
      formatter: function (name: string) {
        return `${name}\n${legendDescription[0]}`;
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['25%', 'center'],
        avoidLabelOverlap: false,
        labelLine: false,
        label: {
          show: true,
          position: 'center',
          formatter: (label: EChartsOption) => {
            return `${label.value} percent`;
          },
          backgroundColor: theme.colors.secondary,
          color: theme.colors.primary,
          fontSize: (isBigScreen && 24) || 16,
        },
        data: [
          {
            value: 72,
            name: 'Lifestyle',
          },
          {
            value: 50,
            name: 'Ecology',
          },
          {
            value: 70,
            name: 'Genetics',
          },
          {
            value: 20,
            name: 'Some info',
          },
        ],
        emphasis: {
          label: {
            show: true,
            backgroundColor: theme.colors.secondary,
            color: theme.colors.primary,
          },
        },
      },
    ],
  };

  return <Chart option={option} height={isMobile && !isBigScreen && 250} />;
};
