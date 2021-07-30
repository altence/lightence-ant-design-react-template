import React from 'react';
import styled from 'styled-components';
import { MonthSelect } from '../../../components/common/MonthSelect';

export const CovidChartHeader: React.FC = () => {
  return (
    <Wrapper>
      COVID-19
      <MonthSelect />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
