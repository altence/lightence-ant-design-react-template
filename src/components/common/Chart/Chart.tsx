import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import * as S from './Chart.styles';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';

interface ChartProps extends S.ChartProps {
  option: EChartsOption;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

  const chartHeight = height
    ? height
    : (isBigScreen && 350) || (isDesktop && 250) || (isTablet && 200) || (!isDesktop && !isTablet && 200) || '100%';

  return <S.Chart option={option} width={width} height={chartHeight} />;
};
