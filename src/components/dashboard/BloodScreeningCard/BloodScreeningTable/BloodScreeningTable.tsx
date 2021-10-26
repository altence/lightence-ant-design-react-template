import React from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { camelize } from '../../../../helpers/camelize';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningTable.styles';

interface BloodScreeningTableProps {
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
  colSpan?: number;
  render: (values: Values) => React.ReactElement;
}

const dataSource: Cell[] = [
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

export const BloodScreeningTable: React.FC<BloodScreeningTableProps> = ({ activeItem, setActiveItem }) => {
  const { isTablet, isBigScreen } = useResponsive();

  const { t } = useTranslation();

  const columns: Column[] = [
    {
      title: t('dashboard.bloodScreening.cell'),
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName }) => (
        <S.Text isActive={cellName === activeItem.values.cellName}>
          {t(`dashboard.bloodScreening.${camelize(cellName)}`)}
        </S.Text>
      ),
    },
    {
      title: t('dashboard.bloodScreening.min'),
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName, min }) => <S.Text isActive={cellName === activeItem.values.cellName}>{min}</S.Text>,
    },
    {
      title: t('dashboard.bloodScreening.yourPerf'),
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName, min, current }) => (
        <S.PercentageWrapper>
          <S.Text isActive={cellName === activeItem.values.cellName}>{current}</S.Text>
          <S.Percentage isActive={cellName === activeItem.values.cellName} isDowngrade={min > current}>
            {min < current ? <CaretUpOutlined /> : <CaretDownOutlined />}
            <S.Text>{Math.abs(Math.round(((current - min) / min) * 100))}%</S.Text>
          </S.Percentage>
        </S.PercentageWrapper>
      ),
    },
  ];

  return (
    <S.Table
      size={(isBigScreen && 'large') || (isTablet && 'middle') || 'small'}
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
