import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { TreatmentCalendarProps as TreatmentHeaderProps } from '../TreatmentCalendar/TreatmentCalendar';
import { media } from '../../../../styles/theme';
import * as S from './TreatmentHeader.styles';

export const TreatmentHeader: React.FC<TreatmentHeaderProps> = ({ date, setDate }) => {
  const isTablet = useMediaQuery({ query: media.md });

  return (
    <S.Wrapper>
      {!isTablet ? (
        <>
          {(date.isDateClicked && 'Treatment plan') || date.date.format('MMMM YYYY')}
          {date.isDateClicked && (
            <S.CalendarBtn size="small" type="text" onClick={() => setDate({ isDateClicked: false, date: date.date })}>
              <CalendarOutlined />
            </S.CalendarBtn>
          )}
        </>
      ) : (
        'Treatment plan'
      )}
    </S.Wrapper>
  );
};
