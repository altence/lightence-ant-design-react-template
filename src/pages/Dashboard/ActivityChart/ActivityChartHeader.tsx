import React from 'react';
import styled from 'styled-components';
import { MonthSwitch } from '../../../components/common/MonthSwitch';

export const ActivityChartHeader: React.FC = () => {
  return (
    <Wrapper>
      Activity
      <MonthSwitch />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
