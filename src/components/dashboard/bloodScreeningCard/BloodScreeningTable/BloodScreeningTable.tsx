import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './BloodScreeningTable.styles';
import { BloodTestResult, flags, results } from '@app/constants/bloodTestResults';
import { ColumnsType } from 'antd/es/table';

interface BloodScreeningTableProps {
  activeItem: BloodTestResult;
  setActiveItem: (item: BloodTestResult) => void;
}

export const BloodScreeningTable: React.FC<BloodScreeningTableProps> = ({ activeItem, setActiveItem }) => {
  const { isTablet, isDesktop } = useResponsive();
  const { t } = useTranslation();
  const [dataSource] = useState<BloodTestResult[]>(results);

  const columns: ColumnsType<BloodTestResult> = [
    {
      title: t('dashboard.bloodScreening.test'),
      dataIndex: 'test',
      width: '30%',
      render: (test: string, { key }) => <S.Text $isActive={activeItem.key === key}>{test}</S.Text>,
    },
    {
      title: t('dashboard.bloodScreening.result'),
      dataIndex: 'result',
      render: (result: number, { key }) => <S.Text $isActive={activeItem.key === key}>{result}</S.Text>,
    },
    {
      title: t('dashboard.bloodScreening.units'),
      dataIndex: 'units',
      render: (units, { key }) => <S.Text $isActive={activeItem.key === key}>{units}</S.Text>,
    },
    {
      title: t('dashboard.bloodScreening.flag'),
      dataIndex: 'flag',
      render: (flag, { key }) => (
        <S.Flag $isNorm={flag === 0} $isActive={activeItem.key === key}>
          {t(flags[flag])}
        </S.Flag>
      ),
    },
  ];

  return (
    <S.Table
      size={'small'}
      pagination={false}
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: isDesktop ? 300 : isTablet ? 620 : 400 }}
      onRow={(record) => {
        return {
          onClick: () => setActiveItem(record),
        };
      }}
    />
  );
};
