import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { TreatmentDate } from './TreatmentDate/TreatmentDate';
import { AppDate, Dates } from 'constants/Dates';
import { useResponsive } from 'hooks/useResponsive';
import { CalendarEvent } from 'api/calendar.api';
import { getDoctorsData, Doctor } from 'api/doctors.api';
import { TreatmentButtons } from './TreatmentButtons/TreatmentButtons';
import { TreatmentDoctor } from './TreatmentDoctor/TreatmentDoctor';

interface TreatmentPanelProps {
  calendar: CalendarEvent[];
  date: AppDate;
  setDateClicked: (state: boolean) => void;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ date, calendar, setDateClicked }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const { mobileOnly, desktopOnly } = useResponsive();

  const currentEvent = calendar.find((event) => Dates.getDate(event.date).isSame(date, 'date'));
  const currentDoctor = doctors.find((doctor) => doctor.id === currentEvent?.doctor);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  return (
    <Row
      gutter={[
        { xs: 20, md: 20 },
        { xs: 10, md: 25, xl: 10 },
      ]}
      align="bottom"
    >
      {(mobileOnly || desktopOnly) && (
        <Col span={24}>
          <ArrowLeftOutlined onClick={() => setDateClicked(false)} />
        </Col>
      )}

      <Col span={24}>
        <TreatmentDoctor doctor={currentDoctor} isEvent={!!currentEvent} />
      </Col>

      <Col span={24}>
        <TreatmentDate date={date} />
      </Col>

      <Col span={24}>
        <TreatmentButtons date={date} isEvent={!!currentEvent} />
      </Col>
    </Row>
  );
};
