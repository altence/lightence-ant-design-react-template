import React from 'react';
import styled from 'styled-components';
import { MonthSwitch } from '../../../components/common/MonthSwitch';

export const HealthChartHeader: React.FC = () => {
  return (
    <Wrapper>
      Health
      <MonthSwitch />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
