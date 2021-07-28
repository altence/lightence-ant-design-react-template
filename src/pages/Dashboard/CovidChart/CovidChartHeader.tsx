import React from 'react';
import styled from 'styled-components';
import { MonthSelect } from '../../../components/common/MonthSelect';

export const CovidChartHeader: React.FC = () => {
  return (
    <CovidChartHeaderWrapper>
      COVID-19
      <MonthSelect />
    </CovidChartHeaderWrapper>
  );
};

const CovidChartHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
