import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Card } from '../../common/Card/Card';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel/TreatmentPanel';
import { TreatmentDoctorCard } from './TreatmentDoctorCard/TreatmentDoctorCard';
import * as S from './TreatmentCard.styles';

export const TreatmentCard: React.FC = () => {
  const [selectedDate, setDate] = useState(dayjs());

  return (
    <Card title="Treatment plan">
      <S.Wrapper>
        <TreatmentCalendar date={selectedDate} setDate={setDate} />
        <TreatmentPanel date={selectedDate} />
        <TreatmentDoctorCard date={selectedDate} />
      </S.Wrapper>
    </Card>
  );
};
