import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from 'hooks/useResponsive';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel';
import { AppDate, Dates } from 'constants/Dates';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { CalendarEvent, getUserCalendar } from 'api/calendar.api';
import { ArrowLeftOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BaseButton } from '../../common/BaseButton/BaseButton';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';

export const TreatmentCard: React.FC = () => {
  const { isTablet } = useResponsive();

  const [selectedDate, setDate] = useState<AppDate>(Dates.getToday());
  const [isDateClicked, setDateClicked] = useState(false);
  const [calendar, setCalendar] = useState<CalendarEvent[]>([]);

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    user && getUserCalendar(user?.id).then((res) => setCalendar(res));
  }, [user]);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    setDate((selectedDate) => selectedDate.locale(i18n.language));
  }, [i18n.language]);

  const handleDecreaseMonth = () => {
    setDate(selectedDate.month(selectedDate.month() - 1));
  };

  const handleIncreaseMonth = () => {
    setDate(selectedDate.month(selectedDate.month() + 1));
  };

  const handleToday = () => {
    setDate(Dates.getToday());
  };

  const calendarItem = (
    <TreatmentCalendar
      calendar={calendar}
      date={selectedDate}
      setDate={setDate}
      onDecrease={handleDecreaseMonth}
      onIncrease={handleIncreaseMonth}
      onToday={handleToday}
      setDateClicked={setDateClicked}
    />
  );

  const currentEvent = calendar.find((event) => Dates.getDate(event.date).isSame(selectedDate, 'date'));

  const panelItem = <TreatmentPanel event={currentEvent} />;

  return (
    <DashboardCard title={t('medical-dashboard.treatmentPlan.title')}>
      <RowStyled gutter={[10, 10]} wrap={false}>
        {isTablet ? (
          <>
            <BaseCol md={12}>{calendarItem}</BaseCol>
            <BaseCol md={12}>{panelItem}</BaseCol>
          </>
        ) : isDateClicked && calendar.some((event) => Dates.getDate(event.date).isSame(selectedDate, 'date')) ? (
          <BackButtonWrapper span={24}>
            {panelItem}
            <BackButton type="text" icon={<ArrowLeftOutlined />} onClick={() => setDateClicked(false)} />
          </BackButtonWrapper>
        ) : (
          <BaseCol span={24}>{calendarItem}</BaseCol>
        )}
      </RowStyled>
    </DashboardCard>
  );
};

const BackButtonWrapper = styled(BaseCol)`
  position: relative;
`;

const BackButton = styled(BaseButton)`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--white);
`;

const RowStyled = styled(BaseRow)`
  min-height: 21.75rem;
`;
