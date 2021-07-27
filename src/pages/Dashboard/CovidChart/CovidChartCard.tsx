import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { CovidChartHeader } from './CovidChartHeader';
import { CovidChart } from './CovidChart';

export const CovidChartCard: React.FC = () => {
  return (
    <CovidChartWrapper title={<CovidChartHeader />}>
      <CovidChart />
    </CovidChartWrapper>
  );
};

const CovidChartWrapper = styled(Card)`
  background: ${(props) => props.theme.colors.secondary};

  & .ant-card-body {
    padding: 0;
  }
`;
