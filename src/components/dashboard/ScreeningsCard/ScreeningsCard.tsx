import React from 'react';
import { ScreeningsHeader } from './ScreeningsHeader/ScreeningsHeader';
import { ScreeningsFriends } from './ScreeningsFriends/ScreeningsFriends';
import { ScreeningsChart } from './ScreeningsChart/ScreeningsChart';
import * as S from './ScreeningsCard.styles';

export const ScreeningsCard: React.FC = () => {
  return (
    <S.ScreeningsCard id="latest-screenings" title={<ScreeningsHeader />} padding={0}>
      <ScreeningsFriends />
      <ScreeningsChart />
    </S.ScreeningsCard>
  );
};
