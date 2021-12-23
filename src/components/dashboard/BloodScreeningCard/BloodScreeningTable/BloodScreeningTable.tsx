import React from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningTable.styles';
import { results } from 'constants/dashboard/bloodTestResults';

interface BloodScreeningTableProps {
  activeItem: Cell;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setActiveItem: (cell: any) => void;
}

interface Values {
  cellName: string;
  min?: number;
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
  width?: string;
  render: (values: Values) => React.ReactElement;
}

export const BloodScreeningTable: React.FC<BloodScreeningTableProps> = ({ activeItem, setActiveItem }) => {
  const { isTablet, isBigScreen } = useResponsive();
  const { t } = useTranslation();

  const dataSource: Cell[] = results.map(({ test, result, min }, index) => ({
    key: index,
    values: {
      cellName: test,
      min: min,
      current: result,
    },
    data: Array(12)
      .fill(null)
      .map(() => result * Math.abs(Math.sin(Math.random() * result))),
  }));

  const columns: Column[] = [
    {
      title: t('tests'),
      dataIndex: 'values',
      key: 'values',
      render: ({ cellName }) => <S.Text isActive={cellName === activeItem.values.cellName}>{cellName}</S.Text>,
    },
    {
      title: t('dashboard.bloodScreening.min'),
      dataIndex: 'values',
      key: 'values',
      width: '15%',
      render: ({ cellName, min }) => (
        <S.Text isActive={cellName === activeItem.values.cellName}>{min !== undefined ? min : '-'}</S.Text>
      ),
    },
    {
      title: t('results'),
      dataIndex: 'values',
      key: 'values',
      width: '25%',
      render: ({ cellName, min, current }) => (
        <S.PercentageWrapper>
          <S.Text isActive={cellName === activeItem.values.cellName}>{current}</S.Text>
          {min && (
            <S.Percentage isActive={cellName === activeItem.values.cellName} isDowngrade={min > current}>
              {min < current ? <CaretUpOutlined /> : <CaretDownOutlined />}
              <S.Text>{Math.abs(Math.round(((current - min) / min) * 100))}%</S.Text>
            </S.Percentage>
          )}
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
