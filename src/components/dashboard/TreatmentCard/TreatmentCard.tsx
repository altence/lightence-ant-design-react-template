import React, { useState } from 'react';
import moment from 'moment';
import { Card } from '../../common/Card/Card';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel/TreatmentPanel';
import * as S from './TreatmentCard.styles';
import { TreatmentDoctorCard } from './TreatmentDoctorCard/TreatmentDoctorCard';

export const TreatmentCard: React.FC = () => {
  const [selectedDate, setDate] = useState(moment());

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
