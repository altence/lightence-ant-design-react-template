import React from 'react';
import styled from 'styled-components';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

interface ChartProps {
  option?: EChartsOption;
  width?: string | number;
  height?: string | number;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  return <ChartStyled option={option} width={width} height={height} />;
};

const ChartStyled = styled(ReactECharts)<ChartProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height} !important;
`;
