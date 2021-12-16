import React from 'react';
import { Col, Row } from 'antd';
import { CalendarEvent } from 'api/calendar.api';
import { AppDate, Dates } from 'constants/Dates';
import { TreatmentLegends } from './TreatmentLegends/TreatmentLegends';
import * as S from './TreatmentCalendar.styles';
import { CalendarSwitch } from '../../../common/CalendarSwitch/CalendarSwitch';

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
                    <S.Event key={event.date} isPast={isPast}>
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

        <Col span={24}>
          <TreatmentLegends />
        </Col>
      </Row>
    </>
  );
};
