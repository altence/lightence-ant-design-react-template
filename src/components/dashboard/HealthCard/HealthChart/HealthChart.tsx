import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { EChartsOption } from 'echarts';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Chart } from '../../../common/Chart/Chart';
import { pieChartData } from '../../../../constants/healthChartData';
import { useResponsive } from 'hooks/useResponsive';

export const HealthChart: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const { isMobile, isTablet, isDesktop, isBigScreen } = useResponsive();

  const { t } = useTranslation();

  const data = pieChartData.map((item) => {
    return {
      ...item,
      name: t(item.name),
      description: t(item.description),
    };
  });

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      left: '50%',
      top: 'center',
      orient: 'vertical',
      itemWidth: (isBigScreen && 20) || 13,
      itemHeight: (isBigScreen && 20) || 13,
      itemGap: (isBigScreen && 25) || (isTablet && 10) || 5,
      icon: (isBigScreen && 'roundRect') || 'circle',
      textStyle: {
        padding: 10,
        width: (isBigScreen && 260) || (isDesktop && 170) || (isTablet && 220) || 130,
        overflow: 'break',
        rich: {
          a: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: 500,
            padding: [0, 0, 5, 0],
          },
          b: {
            fontFamily: 'Montserrat',
            fontSize: (isBigScreen && 12) || 10,
          },
        },
      },
      formatter: (name: string) => {
        let target;

        for (let i = 0; i < data.length; i++) {
          if (data[i].name === name) {
            target = data[i].description;
          }
        }

        return `{a|${name}}\n\n{b|${target}}`;
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
            return `${label.value} ${t('dashboard.health.percent')}`;
          },
          backgroundColor: themeContext.colors.main.mainBackground,
          color: themeContext.colors.main.primary,
          fontSize: (isBigScreen && 18) || 12,
        },
        data,
        emphasis: {
          label: {
            show: true,
            backgroundColor: themeContext.colors.main.mainBackground,
            color: themeContext.colors.main.primary,
          },
        },
      },
    ],
  };

  return <Chart option={option} height={isMobile && !isBigScreen && 250} />;
};
