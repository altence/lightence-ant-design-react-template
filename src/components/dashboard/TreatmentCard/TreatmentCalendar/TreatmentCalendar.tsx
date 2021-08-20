import React from 'react';
import { TreatmentCardState } from '../TreatmentCard';
import { AppDate } from '../../../../constants/Dates';
import * as S from './TreatmentCalendar.styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../../styles/theme';

export interface TreatmentCalendarProps {
  date: TreatmentCardState;
  setDate: (state: TreatmentCardState) => void;
  handleDecrease: () => void;
  handleIncrease: () => void;
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({
  date,
  setDate,
  handleDecrease,
  handleIncrease,
}) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  const handleSelect = (value: AppDate) => {
    setDate({ date: value, isDateClicked: true });
  };

  return (
    <S.Wrapper>
      {!isTablet && (
        <>
          <S.ButtonLeft onClick={handleDecrease}>
            <LeftOutlined />
          </S.ButtonLeft>
          <S.ButtonRight onClick={handleIncrease}>
            <RightOutlined />
          </S.ButtonRight>
        </>
      )}
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
