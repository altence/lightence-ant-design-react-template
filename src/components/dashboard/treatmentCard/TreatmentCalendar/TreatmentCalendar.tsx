import React, { useMemo } from 'react';
import enUS from 'antd/lib/calendar/locale/en_US';
import deDe from 'antd/es/calendar/locale/de_DE';
import { Col, Row } from 'antd';
import { CalendarSwitch } from '@app/components/common/CalendarSwitch/CalendarSwitch';
import { useLanguage } from '@app/hooks/useLanguage';
import { CalendarEvent } from '@app/api/calendar.api';
import { AppDate, Dates } from '@app/constants/Dates';
import * as S from './TreatmentCalendar.styles';

interface TreatmentCalendarProps {
  date: AppDate;
  setDate: (state: AppDate) => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onToday: () => void;
  setDateClicked: (state: boolean) => void;
  calendar: CalendarEvent[];
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({
  calendar,
  date,
  setDate,
  onDecrease,
  onIncrease,
  setDateClicked,
  onToday,
}) => {
  const { language } = useLanguage();
  const locale = useMemo(() => (language === 'de' ? deDe : enUS), [language]);

  const handleSelect = (value: AppDate) => {
    setDate(value);
    setDateClicked(true);
  };

  const dateFormatted = Dates.format(date, 'MMMM YYYY');

  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <CalendarSwitch
            dateFormatted={dateFormatted}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onToday={onToday}
          />
        </Col>

        <Col span={24}>
          <S.Calendar
            locale={locale}
            dateCellRender={(value) => {
              const today = Dates.getToday();

              return calendar.map((event) => {
                const calendarDate = Dates.getDate(event.date);

                if (
                  calendarDate.isSame(value, 'date') &&
                  calendarDate.isSame(value, 'month') &&
                  calendarDate.isSame(value, 'year')
                ) {
                  const isPast = today.isAfter(calendarDate);

                  return (
                    <S.Event key={event.date} $isPast={isPast}>
                      {calendarDate.format('DD')}
                    </S.Event>
                  );
                }
              });
            }}
            value={date}
            fullscreen={false}
            onSelect={handleSelect}
          />
        </Col>
      </Row>
    </>
  );
};
