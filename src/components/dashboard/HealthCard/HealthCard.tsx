import React from 'react';
import { Card } from '../../common/Card/Card';
import { HealthChart } from './HealthChart/HealthChart';
import { HealthLegend } from './HealthLegend/HealthLegend';
import * as S from './HealthCard.styles';

export const HealthCard: React.FC = () => {
  return (
    <Card title="Health">
      <S.Wrapper>
        <HealthChart />
        <HealthLegend />
      </S.Wrapper>
    </Card>
  );
};
