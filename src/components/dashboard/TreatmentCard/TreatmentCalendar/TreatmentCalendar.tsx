import React from 'react';
import { Dayjs } from 'dayjs';

import * as S from './TreatmentCalendar.styles';

interface TreatmentCalendarProps {
  date: Dayjs;
  setDate: (date: Dayjs) => void;
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({ date, setDate }) => {
  const handleSelect = (value: Dayjs) => {
    setDate(value);
  };

  return (
    <S.Wrapper>
      <S.Calendar value={date} onSelect={handleSelect} fullscreen={false} />
      <S.Legend>
        <S.LegendItem>
          <S.LegendIcon />
          {'-'}
          <S.Text>implementation of the treatment plan</S.Text>
        </S.LegendItem>
        <S.LegendItem>
          <S.LegendIcon isPrimary />
          {'-'}
          <S.Text>upcoming treatment according to plan</S.Text>
        </S.LegendItem>
      </S.Legend>
    </S.Wrapper>
  );
};
