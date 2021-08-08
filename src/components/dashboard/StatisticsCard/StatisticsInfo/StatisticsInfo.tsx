import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import React from 'react';
import * as S from './StatisticsInfo.styles';

interface StatisticsInfoProps {
  title: string;
  percent: number;
  isDowngrade?: boolean;
}

export const StatisticsInfo: React.FC<StatisticsInfoProps> = ({ title, percent, isDowngrade = false }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.PercentageWrapper>
        <S.Text>percent</S.Text>
        <S.Percentage isDowngrade={isDowngrade}>
          {(!isDowngrade && <CaretUpOutlined />) || <CaretDownOutlined />}
          <S.Text>{percent}%</S.Text>
        </S.Percentage>
      </S.PercentageWrapper>
    </S.Wrapper>
  );
};
