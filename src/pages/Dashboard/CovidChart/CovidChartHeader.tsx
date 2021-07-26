import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { MonthSwitch } from '../../../components/common/MonthSwitch';

export const CovidChartHeader: React.FC = () => {
  return (
    <CovidChartHeaderDiv>
      <Typography.Text>COVID-19</Typography.Text>
      <MonthSwitch width="7rem" />
    </CovidChartHeaderDiv>
  );
};

const CovidChartHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
`;
