import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Chart } from '../../../common/Chart/Chart';

interface StatisticsChartProps {
  value: number;
  color: string;
  chartColor: string;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({ value, chartColor, color }) => {
  const themeContext = useContext(ThemeContext);

  const isTablet = useMediaQuery({ query: themeContext.media.md });
  const isDesktop = useMediaQuery({ query: themeContext.media.xl });
  const isBigScreen = useMediaQuery({ query: themeContext.media.xxl });

  const { t } = useTranslation();

  const option = {
    color: [chartColor, themeContext.colors.basicLight],
    series: [
      {
        type: 'pie',
        radius: ['70%', '90%'],
        label: {
          show: true,
          position: 'center',
          fontSize: (isBigScreen && '24px') || (isTablet && '14px') || '12px',
          color,
          formatter: function () {
            return `${value} ${t('common.kg')}`;
          },
        },
        data: [
          { value, name: value < 50 ? '' : value },
          { value: 100 - value, name: value < 50 ? value : '' },
        ],
        emphasis: {
          show: false,
        },
      },
    ],
  };

  return (
    <Chart
      option={option}
      width={(isTablet && !isDesktop && '100%') || '50%'}
      height={(isBigScreen && '120px') || (isTablet && '70px') || '60px'}
    />
  );
};
