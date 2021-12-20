import React, { useEffect, useState } from 'react';
import { CalendarEvent } from 'api/calendar.api';
import { getDoctorsData, Doctor } from 'api/doctors.api';
import { TreatmentDoctor } from './TreatmentDoctor/TreatmentDoctor';
import { specifities } from '../../../../constants/specifities';
import { TreatmentNotFound } from '../TreatmentNotFound/TreatmentNotFound';

interface TreatmentPanelProps {
  event?: CalendarEvent;
}

export const TreatmentPanel: React.FC<TreatmentPanelProps> = ({ event }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorsData().then((res) => setDoctors(res));
  }, []);

  const currentDoctor = doctors.find((doctor) => doctor.id === event?.doctor);

  if (event && currentDoctor) {
    const doctor: TreatmentDoctor = {
      name: currentDoctor.name,
      address: 'Test Address',
      date: event.date,
      imgUrl: currentDoctor.imgUrl,
      phone: 'Test phone',
      speciality: specifities.find(({ id }) => id === currentDoctor.specifity)?.name || '',
    };

    return <TreatmentDoctor doctor={doctor} />;
  } else {
    return <TreatmentNotFound />;
  }
};
