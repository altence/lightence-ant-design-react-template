import React from 'react';
import styled from 'styled-components';
import { MonthSelect } from '../../../components/common/MonthSelect';
import { ScreeningsChartSelect } from './ScreeningsChartSelect';

export const ScreeningsChartHeader: React.FC = () => {
  return (
    <Wrapper>
      Latest screenings
      <Selects>
        <MonthSelect />
        <ScreeningsChartSelect />
      </Selects>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Selects = styled.div`
  & div:first-of-type {
    margin-right: 0.625rem;
  }
`;
