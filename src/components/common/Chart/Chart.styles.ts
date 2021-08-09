import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';

export interface ChartProps {
  width?: string;
  height?: string;
}

export const Chart = styled(ReactECharts)<ChartProps>`
  width: ${(props) => props.width};

  height: ${(props) => props.height || '100%'} !important;
`;
