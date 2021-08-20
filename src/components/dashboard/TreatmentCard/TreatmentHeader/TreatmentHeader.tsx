import React from 'react';
import { CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { TreatmentCalendarProps as TreatmentHeaderProps } from '../TreatmentCalendar/TreatmentCalendar';
import theme from '../../../../styles/theme';
import * as S from './TreatmentHeader.styles';

export const TreatmentHeader: React.FC<TreatmentHeaderProps> = ({ date, setDate, handleIncrease, handleDecrease }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

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
        <>
          Treatment plan
          <S.MonthSwitch>
            <S.Button type="text" onClick={handleDecrease}>
              <LeftOutlined />
            </S.Button>
            <S.Text>{date.date.format('MMMM YYYY')}</S.Text>
            <S.Button type="text" onClick={handleIncrease}>
              <RightOutlined />
            </S.Button>
          </S.MonthSwitch>
        </>
      )}
    </S.Wrapper>
  );
};
