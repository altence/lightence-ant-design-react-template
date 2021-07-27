import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../../components/common/Card';
import { ActivityChart } from './ActivityChart';
import { ActivityChartHeader } from './ActivityChartHeader';

export const ActivityChartCard: React.FC = () => {
  return (
    <CardStyled title={<ActivityChartHeader />}>
      <ActivityChart />
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  background: ${(props) => props.theme.colors.secondary};

  & .ant-card-body {
    padding: 0;
  }
`;
