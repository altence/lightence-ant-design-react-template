import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { Card } from '../../../../components/common/Card';
import { ResultsChart } from './ResultsChart';
import { Cell, ResultsTable } from './ResultsTable';

export const ResultsTimelineCard: React.FC = () => {
  const [activeItem, setActiveItem] = useState<Cell>({
    key: 0,
    values: {
      min: 80,
      current: 90,
      cellName: 'Red blood cells',
    },
    data: [410, 466, 455, 467, 649, 670, 620, 600, 500, 400, 500, 700],
  });

  return (
    <CardStyled title="Patient timeline" padding="0">
      <Badge>{activeItem.values.cellName}</Badge>
      <ResultsChart activeItem={activeItem} />
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
