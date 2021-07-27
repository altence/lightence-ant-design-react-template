import React from 'react';
import styled from 'styled-components';
import { CovidChartHeader } from './CovidChartHeader';
import { CovidChart } from './CovidChart';
import { Card } from '../../../components/common/Card';

export const CovidChartCard: React.FC = () => {
  return (
    <CardStyled title={<CovidChartHeader />}>
      <CovidChart />
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  background: ${(props) => props.theme.colors.secondary};

  & .ant-card-body {
    padding: 0;
  }
`;
