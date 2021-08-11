import React from 'react';
import { Moment } from 'moment';
import * as S from './TreatmentCalendar.styles';

interface TreatmentCalendarProps {
  date: Moment;
  setDate: (date: Moment) => void;
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({ date, setDate }) => {
  const handleSelect = (value: Moment) => {
    setDate(value);
  };

  return <S.Calendar value={date} onSelect={handleSelect} fullscreen={false} />;
};
