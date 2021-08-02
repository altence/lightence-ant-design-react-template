import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/common/Card';
import { ScreeningsChart } from './ScreeningsChart';
import { ScreeningsChartCollapse } from './ScreeningsChartCollapse';
import { ScreeningsChartHeader } from './ScreeningsChartHeader';

export const ScreeningsChartCard: React.FC = () => {
  return (
    <CardStyled title={<ScreeningsChartHeader />} padding="0">
      <ScreeningsChartCollapse />
      <ScreeningsChart />
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  & .ant-card-body {
    position: relative;
  }
`;
