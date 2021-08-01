import React from 'react';
import styled from 'styled-components';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

interface ChartStyledProps {
  width?: string;
  height?: string;
}

interface ChartProps extends ChartStyledProps {
  option: EChartsOption;
}

// TODO we need to add card body all available space. Probably use flex on card structure
export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  return <ChartStyled option={option} width={width} height={height} />;
};

const ChartStyled = styled(ReactECharts)<ChartStyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '100%'} !important;
`;
