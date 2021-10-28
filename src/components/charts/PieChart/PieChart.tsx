import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { hexToRGB } from 'helpers/hexToRGB';
import { useResponsive } from 'hooks/useResponsive';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';

export const PieChart: React.FC = () => {
  const { t } = useTranslation();

  const { isTablet } = useResponsive();

  const radiusLayout = (isTablet && '70%') || '50%';

  const theme = useContext(ThemeContext);

  const option = {
    legend: {
      orient: 'vertical',
      left: 'left',
      show: isTablet,
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: radiusLayout,
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
