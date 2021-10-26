import React from 'react';
import { CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { TreatmentCalendarProps as TreatmentHeaderProps } from '../TreatmentCalendar/TreatmentCalendar';
import { useResponsive } from 'hooks/useResponsive';
import { Dates } from '../../../../constants/Dates';
import * as S from './TreatmentHeader.styles';

export const TreatmentHeader: React.FC<TreatmentHeaderProps> = ({ date, setDate, handleIncrease, handleDecrease }) => {
  const { mobileOnly } = useResponsive();

  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {mobileOnly ? (
        <>
          {(date.isDateClicked && t('dashboard.treatmentPlan.title')) || Dates.format(date.date, 'LL')}
          {date.isDateClicked && (
            <S.CalendarBtn size="small" type="text" onClick={() => setDate({ isDateClicked: false, date: date.date })}>
              <CalendarOutlined />
            </S.CalendarBtn>
          )}
        </>
      ) : (
        <>
          {t('dashboard.treatmentPlan.title')}
          <S.MonthSwitch>
            <S.Button type="text" onClick={handleDecrease}>
              <LeftOutlined />
            </S.Button>
            <S.Text>{Dates.format(date.date, 'LL')}</S.Text>
            <S.Button type="text" onClick={handleIncrease}>
              <RightOutlined />
            </S.Button>
          </S.MonthSwitch>
        </>
      )}
    </S.Wrapper>
  );
};
