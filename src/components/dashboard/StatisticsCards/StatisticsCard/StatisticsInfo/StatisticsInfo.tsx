import React from 'react';
import { Space } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { getDifference } from 'utils/utils';
import * as S from './StatisticsInfo.styles';

interface StatisticsInfoProps {
  name: string;
  value: number;
  prevValue: number;
}

export const StatisticsInfo: React.FC<StatisticsInfoProps> = ({ name, value, prevValue }) => {
  return (
    <Space direction="vertical" size={0}>
      <S.Title>{name}</S.Title>

      {prevValue && (
        <S.Text>
          {value > prevValue ? <CaretUpOutlined /> : <CaretDownOutlined />}
          {getDifference(value, prevValue)}
        </S.Text>
      )}
    </Space>
  );
};
