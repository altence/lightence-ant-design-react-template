import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'components/common/Card/Card';
import { CalendarEvent } from 'api/calendar.api';
import { AppDate, Dates } from 'constants/Dates';
import { TreatmentProps } from '../interfaces';
import { TreatmentCalendarHeader } from './TreatmentCalendarHeader/TreatmentCalendarHeader';
import { TreatmentLegends } from './TreatmentLegends/TreatmentLegends';
import * as S from './TreatmentCalendar.styles';

interface TreatmentCalendarProps extends TreatmentProps {
  setDateClicked: (state: boolean) => void;
  calendar: CalendarEvent[];
}

export const TreatmentCalendar: React.FC<TreatmentCalendarProps> = ({
  calendar,
  date,
  setDate,
  handleDecrease,
  handleIncrease,
  setDateClicked,
}) => {
  const handleSelect = (value: AppDate) => {
    setDate(value);
    setDateClicked(true);
  };

  return (
    <Card padding={[30, 15]}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <TreatmentCalendarHeader date={date} handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
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
    </Card>
  );
};
