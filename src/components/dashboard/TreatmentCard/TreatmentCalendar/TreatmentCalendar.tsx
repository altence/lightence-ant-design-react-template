import React from 'react';
import { useTranslation } from 'react-i18next';
import { TreatmentCardState } from '../TreatmentCard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AppDate } from '../../../../constants/Dates';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './TreatmentCalendar.styles';

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
  const { mobileOnly } = useResponsive();

  const { t } = useTranslation();

  const handleSelect = (value: AppDate) => {
    setDate({ date: value, isDateClicked: true });
  };

  return (
    <S.Wrapper>
      {mobileOnly && (
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
          <S.Text>{t('dashboard.treatmentPlan.upcomingTreatment')}</S.Text>
        </S.LegendItem>
        <S.LegendItem>
          <S.LegendIcon />
          {'-'}
          <S.Text>{t('dashboard.treatmentPlan.implementationTreatment')}</S.Text>
        </S.LegendItem>
      </S.Legend>
    </S.Wrapper>
  );
};
