import React from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsCollapse } from './ScreeningsCollapse/ScreeningsCollapse';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import * as S from './ScreeningsCard.styles';

export const ScreeningsCard: React.FC = () => {
  return (
    <S.Card title={<ScreeningsHeader />} padding="0">
      <ScreeningsCollapse />
      <ScreeningsChart />
    </S.Card>
  );
};
