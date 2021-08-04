import React from 'react';
import styled from 'styled-components';
import { Table, Typography } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

interface ResultsTableProps {
  activeItem: Cell;
  setActiveItem: (cell: any) => void;
}

interface Values {
  cellName: string;
  min: number;
  current: number;
}

export interface Cell {
  key: number;
  values: Values;
  data: number[];
}

interface Column {
  title: string;
  dataIndex: string;
  key: string;
  render: (values: Values) => React.ReactElement;
}

interface TextProps {
  isActive: boolean;
}

interface PercentageProps extends TextProps {
  isDowngrade: boolean;
}

export const dataSource: Cell[] = [
  {
    key: 0,
    values: {
      cellName: 'Red blood cells',
      min: 80,
      current: 90,
    },
    data: [410, 466, 455, 467, 649, 670, 620, 600, 500, 400, 500, 700],
  },
  {
    key: 1,
    values: {
      cellName: 'White blood cells',
      min: 90,
      current: 91,
    },
    data: [277, 426, 632, 452, 536, 670, 432, 523, 500, 400, 550, 770],
  },
  {
    key: 2,
    values: {
      cellName: 'Platelets',
      min: 60,
      current: 55,
    },
    data: [347, 525, 542, 452, 325, 424, 366, 421, 565, 400, 320, 340],
  },
  {
    key: 3,
    values: {
      cellName: 'Hemoglobin',
      min: 40,
      current: 60,
    },
    data: [425, 423, 314, 455, 546, 620, 482, 513, 450, 470, 520, 600],
  },
  {
    key: 4,
    values: {
      cellName: 'Hematocrit',
      min: 30,
      current: 20,
    },
    data: [222, 426, 652, 482, 426, 450, 482, 523, 540, 500, 400, 450],
  },
];

export const ResultsTable: React.FC<ResultsTableProps> = ({ activeItem, setActiveItem }) => {
  const columns: Column[] = [
    {
      title: 'Cell',
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName }) => <Text isActive={cellName === activeItem.values.cellName}>{cellName}</Text>,
    },
    {
      title: 'Min',
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName, min }) => <Text isActive={cellName === activeItem.values.cellName}>{min}</Text>,
    },
    {
      title: 'Your perf.',
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName, min, current }) => (
        <Text isActive={cellName === activeItem.values.cellName}>
          {current}
          <Percentage isActive={cellName === activeItem.values.cellName} isDowngrade={min > current}>
            {min < current ? <CaretUpOutlined /> : <CaretDownOutlined />}
            {Math.abs(Math.round(((current - min) / min) * 100))}%
          </Percentage>
        </Text>
      ),
    },
  ];

  return (
    <TableStyled
      pagination={false}
      columns={columns}
      dataSource={dataSource}
      onRow={(record) => {
        return {
          onClick: () => setActiveItem(record),
        };
      }}
    />
  );
};

const TableStyled = styled(Table)`
  & .ant-table-thead > tr > th {
    font-weight: 400;
    font-size: 0.75rem;

    &::before {
      display: none;
    }
  }

  & .ant-table-tbody > tr > td {
    border: 0;
  }
`;

const Text = styled(Typography.Text)<TextProps>`
  color: ${(props) => (props.isActive && props.theme.colors.basicDark) || props.theme.colors.basic};
  display: flex;
  align-items: center;
`;

const Percentage = styled.div<PercentageProps>`
  width: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) =>
    (props.isActive && props.isDowngrade && props.theme.colors.fail) || (props.isActive && props.theme.colors.success)};
`;
