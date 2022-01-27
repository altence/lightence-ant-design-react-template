import React from 'react';
import { TreatmentDoctor } from './TreatmentDoctor/TreatmentDoctor';
import { TreatmentNotFound } from './TreatmentNotFound/TreatmentNotFound';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { specifities } from '@app/constants/specifities';
import { CalendarEvent } from '@app/api/calendar.api';

interface TreatmentPanelProps {
  event?: CalendarEvent;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ event }) => {
  const doctors = useAppSelector((state) => state.doctors.data);

  const currentDoctor = doctors.find((doctor) => doctor.id === event?.doctor);

  if (event && currentDoctor) {
    const doctor: TreatmentDoctor = {
      name: currentDoctor.name,
      address: currentDoctor.address,
      date: event.date,
      imgUrl: currentDoctor.imgUrl,
      phone: currentDoctor.phone,
      speciality: specifities.find(({ id }) => id === currentDoctor.specifity)?.name || '',
    };

    return <TreatmentDoctor doctor={doctor} />;
  } else {
    return <TreatmentNotFound />;
  }
};
