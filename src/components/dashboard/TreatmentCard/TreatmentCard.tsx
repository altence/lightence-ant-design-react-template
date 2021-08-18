import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../../common/Card/Card';
import { TreatmentHeader } from './TreatmentHeader/TreatmentHeader';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel/TreatmentPanel';
import { media } from '../../../styles/theme';
import { AppDate, Dates } from '../../../constants/Dates';
import * as S from './TreatmentCard.styles';

export interface TreatmentCardState {
  isDateClicked: boolean;
  date: AppDate;
}

export const TreatmentCard: React.FC = () => {
  const isTablet = useMediaQuery({ query: media.md });

  const [selectedDate, setDate] = useState<TreatmentCardState>({
    isDateClicked: false,
    date: Dates.getToday(),
  });

  return (
    <Card title={<TreatmentHeader date={selectedDate} setDate={setDate} />}>
      <S.Wrapper>
        {(!selectedDate.isDateClicked || isTablet) && <TreatmentCalendar date={selectedDate} setDate={setDate} />}
        {(selectedDate.isDateClicked || isTablet) && <TreatmentPanel date={selectedDate.date} />}
      </S.Wrapper>
    </Card>
  );
};
