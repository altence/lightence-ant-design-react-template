import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import * as S from './Chart.styles';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../../styles/theme';

interface ChartProps extends S.ChartProps {
  option: EChartsOption;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });

  const chartHeight = height
    ? height
    : (isDesktop && '250px') || (isTablet && '200px') || (!isDesktop && !isTablet && '200px') || '100%';

  return <S.Chart option={option} width={width} height={chartHeight} />;
};
