import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { TreatmentCalendarProps as TreatmentHeaderProps } from '../TreatmentCalendar/TreatmentCalendar';
import * as S from './TreatmentHeader.styles';

export const TreatmentHeader: React.FC<TreatmentHeaderProps> = ({ date, setDate }) => {
  return (
    <S.Wrapper>
      {(date.isDateClicked && 'Treatment plan') || date.date.format('MMMM YYYY')}
      {date.isDateClicked && (
        <S.CalendarBtn size="small" type="text" onClick={() => setDate({ isDateClicked: false, date: date.date })}>
          <CalendarOutlined />
        </S.CalendarBtn>
      )}
    </S.Wrapper>
  );
};
