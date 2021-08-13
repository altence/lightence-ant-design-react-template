import React from 'react';
import { TreatmentCardState } from '../TreatmentCard';
import { AppDate } from '../../../../constants/Dates';
import * as S from './TreatmentCalendar.styles';

export interface TreatmentCalendarProps {
  date: TreatmentCardState;
  setDate: (date: TreatmentCardState) => void;
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({ date, setDate }) => {
  const handleSelect = (value: AppDate) => {
    setDate({ date: value, isDateClicked: true });
  };

  return (
    <S.Wrapper>
      <S.Calendar value={date.date} onSelect={handleSelect} fullscreen={false} />
      <S.Legend>
        <S.LegendItem>
          <S.LegendIcon isPrimary />
          {'-'}
          <S.Text>upcoming treatment according to plan</S.Text>
        </S.LegendItem>
        <S.LegendItem>
          <S.LegendIcon />
          {'-'}
          <S.Text>implementation of the treatment plan</S.Text>
        </S.LegendItem>
      </S.Legend>
    </S.Wrapper>
  );
};
