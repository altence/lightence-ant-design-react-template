import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { Card } from '../../../../components/common/Card';
import { ResultsChart } from './ResultsChart';
import { ResultsTable } from './ResultsTable';

export const ResultsTimelineCard: React.FC = () => {
  const [activeItem, setActiveItem] = useState('White blood cells');

  return (
    <CardStyled title="Patient timeline" padding="0">
      <Badge>{activeItem}</Badge>
      <ResultsChart />
      <ResultsTable activeItem={activeItem} setActiveItem={setActiveItem} />
    </CardStyled>
  );
};

const CardStyled = styled(Card)`
  & .ant-card-body {
    position: relative;
  }
`;

const Badge = styled(Typography.Text)`
  background: ${(props) => props.theme.colors.primaryLight};
  padding: 0.3rem 1rem;
  border-radius: 7px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  position: absolute;
  top: 3%;
  left: 5%;
  z-index: 2;
`;
