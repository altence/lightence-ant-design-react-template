import { BaseProgress } from '@app/components/common/BaseProgress/BaseProgress';
import React from 'react';
import * as S from './StatisticsProgress.styles';

interface StatisticsProgressProps {
  color: string;
  unit: 'kg';
  value: number;
}

export const StatisticsProgress: React.FC<StatisticsProgressProps> = ({ color, value, unit }) => {
  return (
    <BaseProgress
      type="circle"
      width={50}
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
