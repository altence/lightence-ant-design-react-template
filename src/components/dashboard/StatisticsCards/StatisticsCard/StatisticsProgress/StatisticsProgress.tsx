import React from 'react';
import { Progress } from 'antd';
import { StatisticColor } from 'constants/config/statistics';
import * as S from './StatisticsProgress.styles';

interface StatisticsProgressProps {
  color: StatisticColor;
  unit: 'kg';
  value: number;
}

export const StatisticsProgress: React.FC<StatisticsProgressProps> = ({ color, value, unit }) => {
  return (
    <Progress
      type="circle"
      width={35}
      strokeColor={color}
      trailColor="transparent"
      percent={value}
      format={(percent) => (
        <>
          <S.ValueText>{percent}</S.ValueText>
          <br />
          <S.UnitText>{unit}</S.UnitText>
        </>
      )}
    />
  );
};
