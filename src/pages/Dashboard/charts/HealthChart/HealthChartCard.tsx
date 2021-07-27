import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/common/Card';
import { HealthChart } from './HealthChart';
import { HealthChartHeader } from './HealthChartHeader';

export const HealthChartCard: React.FC = () => {
  return (
    <CardStyled title={<HealthChartHeader />}>
      <HealthChart />
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  background: ${(props) => props.theme.colors.secondary};

  & .ant-card-body {
    padding: 0;
  }
`;
