import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import { Card } from '../../common/Card/Card';
import { TreatmentHeader } from './TreatmentHeader/TreatmentHeader';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel/TreatmentPanel';
import { AppDate, Dates } from '../../../constants/Dates';
import * as S from './TreatmentCard.styles';

export interface TreatmentCardState {
  isDateClicked: boolean;
  date: AppDate;
}

export const TreatmentCard: React.FC = () => {
  const { isTablet } = useResponsive();

  const [selectedDate, setDate] = useState<TreatmentCardState>({
    isDateClicked: false,
    date: Dates.getToday(),
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    setDate({ ...selectedDate, date: selectedDate.date.locale(i18n.language) });
  }, [i18n.language]);

  const handleDecreaseMonth = () => {
    setDate((prev) => {
      return {
        ...prev,
        date: prev.date.month(prev.date.month() - 1),
      };
    });
  };

  const handleIncreaseeMonth = () => {
    setDate((prev) => {
      return {
        ...prev,
        date: prev.date.month(prev.date.month() + 1),
      };
    });
  };

  return (
    <Card
      id="treatment"
      title={
        <TreatmentHeader
          date={selectedDate}
          setDate={setDate}
          handleDecrease={handleDecreaseMonth}
          handleIncrease={handleIncreaseeMonth}
        />
      }
    >
      <S.Wrapper>
        {(!selectedDate.isDateClicked || isTablet) && (
          <TreatmentCalendar
            date={selectedDate}
            setDate={setDate}
            handleDecrease={handleDecreaseMonth}
            handleIncrease={handleIncreaseeMonth}
          />
        )}
        {(selectedDate.isDateClicked || isTablet) && <TreatmentPanel date={selectedDate.date} />}
      </S.Wrapper>
    </Card>
  );
};
