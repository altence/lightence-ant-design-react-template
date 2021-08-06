import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import * as S from './Chart.styles';

interface ChartProps extends S.ChartProps {
  option: EChartsOption;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  return <S.Chart option={option} width={width} height={height} />;
};
