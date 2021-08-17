import React from 'react';
import { AppDate } from '../../../../constants/Dates';

import * as S from './TreatmentCalendar.styles';

interface TreatmentCalendarProps {
  date: AppDate;
  setDate: (date: AppDate) => void;
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({ date, setDate }) => {
  const handleSelect = (value: AppDate) => {
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
