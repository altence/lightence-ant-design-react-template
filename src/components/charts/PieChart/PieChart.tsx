import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { hexToRGB } from 'helpers/hexToRGB';
import { useResponsive } from 'hooks/useResponsive';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';

export const PieChart: React.FC = () => {
  const { t } = useTranslation();

  const { isMobile, isTablet, isDesktop, isBigScreen } = useResponsive();

  const theme = useContext(ThemeContext);

  const radiusValue = isBigScreen ? '80%' : isDesktop ? '70%' : isTablet ? '50%' : isMobile ? '60%' : '60%';

  const chartPosition = [
    'center',
    isBigScreen ? '55%' : isDesktop ? '65%' : isTablet ? '75%' : isMobile ? '70%' : '70%',
  ];

  const option = {
    color: [
      theme.colors.main.primary,
      theme.colors.main.success,
      theme.colors.main.error,
      theme.colors.main.warning,
      theme.colors.main.secondary,
    ],
    legend: { orient: 'horizontal', top: 'top' },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        center: chartPosition,
        radius: radiusValue,
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: hexToRGB(theme.commonColors.black, 0.5),
          },
        },
      },
    ],
  };

  return (
    <Card title={t('charts.pie')}>
      <Chart option={option} />
    </Card>
  );
};
