import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './Chart.styles';

interface ChartProps extends S.ChartProps {
  option: EChartsOption;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const { isMobile, isTablet, isDesktop, isBigScreen } = useResponsive();

  const chartHeight = height
    ? height
    : (isBigScreen && 350) || (isDesktop && 250) || (isTablet && 200) || (isMobile && 200) || '100%';

  return <S.Chart option={option} width={width} height={chartHeight} />;
};
